"use strict";

history.scrollRestoration = "manual";

// ===== loading adobe fonts =====

setTimeout(() => {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active") !=
    true
  ) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
    document.body.classList.remove("fadeout");
  }
}, 3000);

const doStuff = () => {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active")
  ) {
    document.body.classList.remove("fadeout");

    setTimeout(() => {
      $(".c-loading__logo.js-black").addClass("--show");
      setTimeout(() => {
        $(".c-loading__logo.js-black").removeClass("--show");
        $(".c-loading__logo.js-white").addClass("--show");
        $(".top__parallax").addClass("--show");
        setTimeout(() => {
          $(".c-loading__logo.js-black").remove();
        }, 500);
      }, 1500);
    }, 1500);

    clearInterval(myInterval);
  }
};
const myInterval = setInterval(doStuff, 500);

// ===== resize movie 100vh =====

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty(
    "--app-height",
    `${document.documentElement.clientHeight}px`
  );
};
window.addEventListener("resize", appHeight);
appHeight();

// ===== parallax =====
let scrollPosi = 0;

$(window).on("resize", function () {
  scrollParallax();
});
scrollParallax();

function scrollParallax() {
  let width = $(window).width();

  if (width < 1024) {
    $(window).scroll(function () {
      scrollPosi = $(document).scrollTop();

      $("#js-parallax")
        .stop(true, true)
        .animate(
          {
            "background-position-y": -scrollPosi / 4 + "px",
          },
          200
        );
    });
  } else {
    $(window).scroll(function () {
      scrollPosi = $(document).scrollTop();

      $("#js-parallax")
        .stop(true, true)
        .animate(
          {
            "background-position-y": -scrollPosi / 1.4 + "px",
          },
          200
        );
    });
  }
}

// ===== scroll =====
window.addEventListener("scroll", () => {
  const content = document.querySelector(".top__content");

  if (window.scrollY + content.offsetTop - 100 > content.offsetTop) {
    $(".c-loading__logo.js-white, .top__scroll").css("opacity", "0");
  } else {
    $(".c-loading__logo.js-white, .top__scroll").css("opacity", "1");
  }
});

// ===== scroll fade =====

$(window).on("scroll pageshow load", function () {
  let scrollTop = $(window).scrollTop();
  let bottom = scrollTop + $(window).height() - 200;

  $(".is-fade").each(function () {
    if (bottom > $(this).offset().top) {
      $(this).addClass("--active");
    } else {
      $(this).removeClass("--active");
    }
  });
});
