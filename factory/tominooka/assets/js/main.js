"use strict";

/* -------------------------------- all page -------------------------------- */

// add event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
};

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

// ===== invert header =====

window.addEventListener("scroll", () => {
  const jsInvert = document.querySelector(".js-invert");
  const reservationJS = document.querySelector(".js-reservation");
  const facilitiesJS = document.querySelector(".c-facilities");

  window.scrollY + 330 > jsInvert.offsetTop
    ? document.querySelector(".js-nav").classList.add("--invert")
    : document.querySelector(".js-nav").classList.remove("--invert");

  if (window.scrollY + jsInvert.offsetTop > jsInvert.offsetTop) {
    reservationJS.classList.add("--active");
    document.querySelector(".js-nav").classList.add("--is-top");
  } else {
    reservationJS.classList.remove("--active");
    document.querySelector(".js-nav").classList.remove("--is-top");
  }

  // footer
  window.scrollY + 800 > facilitiesJS.offsetTop
    ? reservationJS.classList.add("--is-hide")
    : reservationJS.classList.remove("--is-hide");
});

// ===== scroll down & up =====

let lastScrollTop = 0;

const scrollDownUp = () => {
  let breakpoint = $(window).width();
  let st = window.scrollY;
  let delta = breakpoint > 1023 ? 30 : 15;

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && lastScrollTop > 0) {
    // downscroll code
    $(".c-nav__menu").addClass("--is-hide");
    $(".c-nav__left").addClass("--is-hide");
  } else {
    // upscroll code
    $(".c-nav__menu").removeClass("--is-hide");
    $(".c-nav__left").removeClass("--is-hide");
  }

  lastScrollTop = st;
};

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 15 && $(window).width() < 1024) {
    $(".c-nav__left").addClass("--is-scale");
  } else {
    $(".c-nav__left").removeClass("--is-scale");
  }
});

$(document).ready(function () {
  scrollDownUp();
  $(window).resize(scrollDownUp).scroll(scrollDownUp);
});

// ===== menu show/hide =====

const [menuToggler, menuLinks, menu, reservation] = [
  document.querySelectorAll("[data-menu-toggler]"),
  document.querySelectorAll("[data-menu-link]"),
  document.querySelector("[data-menu]"),
  document.querySelector("[data-reservation"),
];

const toggleMenu = () => {
  menu.classList.toggle("--active");
  reservation.classList.toggle("--menu-active");
  document.body.classList.toggle("--no-scroll");
};

addEventOnElements(menuToggler, "click", toggleMenu);

const closeMenu = () => {
  menu.classList.remove("--active");
  document.body.classList.remove("--no-scroll");
};

addEventOnElements(menuLinks, "click", closeMenu);

// ===== click link fadeout =====

$(document).on(
  "click",
  'a:not([href^="#"]):not([target]):not([href^="mailto"])',
  function (e) {
    e.preventDefault();
    const url = $(this).attr("href");

    if (url !== "") {
      const idx = url.indexOf("#");
      const hash = idx != -1 ? url.substring(idx) : "";

      if ($(hash).length > 0) {
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          300
        );
        return false;
      }

      $("body").addClass("fadeout");

      setTimeout(function () {
        window.location = url;
        setTimeout(() => {
          $("body").removeClass("fadeout");
        }, 4000);
      }, 500);
    }
    return false;
  }
);

/* -------------------------------- home page------------------------------- */

if (document.getElementById("homepage")) {
  console.log("homepage");

  if (sessionStorage.getItem("opening-displayed") === "true") {
    $(".js-logo").addClass("is-hidden");
    $(".js-video, .js-youtube, .js-news, .js-nav, .js-scrolldown, .js-reservation").css({
      opacity: 1,
    });
  }

  // ===== loading homepage =====
  ["pageshow", "load"].forEach((evt) => {
    window.addEventListener(evt, () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: Power1.easeInOut },
      });

      tl.to(".js-youtube", {
        opacity: 1,
        delay: 1,
      })
        .to(".js-logo", {
          opacity: 1,
          delay: 1,
        })
        .to(".js-logo", {
          opacity: 0,
          delay: 1,
        })
        .to(".js-nav, .js-news, .js-scrolldown, .js-reservation", {
          opacity: 1,
        });

      sessionStorage.setItem("opening-displayed", !0);
    });
  });

  // ===== scroll =====
  // window.addEventListener("scroll", () => {
  //   const invertJS = document.querySelector(".js-invert");
  //
  //   if (window.scrollY + invertJS.offsetTop > invertJS.offsetTop) {
  //      document.querySelector(".js-news").classList.add("--is-fade");
  //     document.querySelector(".js-scrolldown").classList.add("--is-fade");
  //   } else {
  //     document.querySelector(".js-news").classList.remove("--is-fade");
  //     document.querySelector(".js-scrolldown").classList.remove("--is-fade");
  //   }
  // });

  // ===== toggle map =====

  // active tooltip
  $("[data-pointer-toggler]").each(function () {
    $(this).on("click", function () {
      $("[data-tooltip]").removeClass("--active-tooltip");
      $("[data-pointer]").removeClass("--active");
      $(this).next().addClass("--active-tooltip");
      $(this).next().next().addClass("--active");
    });
  });

  // close tooltip
  $("[close-tooltip]").each(function () {
    $(this).on("click", function () {
      $("[data-tooltip]").removeClass("--active-tooltip");
      $("[data-pointer]").removeClass("--active");
    });
  });

  $(document).ready(function () {
    updateContainer();

    $(window).resize(function () {
      updateContainer();
    });
  });

  function updateContainer() {
    let $containerHeight = $(window).height();

    if ($containerHeight < 1100) {
      $("[data-tooltip]").removeClass("--active-tooltip");
      $("[data-pointer]").removeClass("--active");
    }
  }

  // ===== swiper =====

  // swiper concept
  const conceptSwiper = new Swiper(".concept__swiper", {
    loop: true,
    speed: 10000,
    slidesPerView: "auto",
    spaceBetween: 0,
    preventInteractionOnTransition: true,
    autoplay: {
      delay: 0,
    },
  });

  // swiper tour
  const tourSwiper = new Swiper(".c-fadein-swiper", {
    effect: "fade",
    speed: 1000,
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
  });

  // ===== accordion =====

  let accordion = document.getElementsByClassName("js-accordion");
  let panel = document.getElementsByClassName("news__panel");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("--active");
      this.nextElementSibling.classList.toggle("--active");
      if (panel[i].style.maxHeight) {
        panel[i].style.maxHeight = null;
      } else {
        panel[i].style.maxHeight = panel[i].scrollHeight + "px";
      }
    });
  }
}

/* --------------------------------- mappage -------------------------------- */

if (document.getElementById("mappage")) {
  console.log("mappage");

  // ===== hover map =====

  const hoverMap = () => {
    $(".c-map__pointer").each(function (i, val) {
      $(".c-map__pointer.anckr-" + i).on("mouseover", function () {
        $(".c-map__pointer.anckr-" + i).addClass("--active");
        $(".map__anckr .anckr-" + i).addClass("--active");
      });

      $(".c-map__pointer.anckr-" + i).on("mouseout", function () {
        $(".c-map__pointer.anckr-" + i).removeClass("--active");
        $(".map__anckr .anckr-" + i).removeClass("--active");
      });
    });

    $(".map__anckr a").each(function (i, val) {
      $(".map__anckr .anckr-" + i).on("mouseover", function () {
        $(this).addClass("--active");
        $(".c-map__pointer.anckr-" + i).addClass("--active");
      });

      $(".map__anckr .anckr-" + i).on("mouseout", function () {
        $(this).removeClass("--active");
        $(".c-map__pointer.anckr-" + i).removeClass("--active");
      });
    });

    // const pointerAnckr = document.querySelectorAll(".c-map__pointer.anckr");
    // const anckr = document.querySelectorAll(`.map__anckr .anckr`);

    // pointerAnckr.forEach((evt, index) => {
    //   evt.addEventListener("mouseover", (e) => {
    //     anckr[index].classList.add("--active");
    //   });
    //   evt.addEventListener("mouseout", (e, i) => {
    //     anckr[index].classList.remove("--active");
    //   });
    // });

    // anckr.forEach((evt, index) => {
    //   evt.addEventListener("mouseover", (e) => {
    //     pointerAnckr[index].classList.add("--active");
    //   });
    //   evt.addEventListener("mouseout", (e, i) => {
    //     pointerAnckr[index].classList.remove("--active");
    //   });
    // });
  };
  hoverMap();

  // ===== swiper map =====

  const swiperFactilities = new Swiper(".factilities__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 600,
    // slidesPerView: "auto",
    breakpoints: {
      0: {
        spaceBetween: 10,
        draggable: true,
        slidesPerView: 1.1,
      },
      1024: {
        spaceBetween: 15,
        draggable: false,
        slidesPerView: "auto",
      },
    },
  });

  // ===== custom cursor =====

  const cursorPrev = document.querySelector(".cursor-prev");
  const cursorNext = document.querySelector(".cursor-next");

  const mousemoveHandler = (e) => {
    const target = e.target;
    const tl = gsap.timeline({
      defaults: {
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      },
    });

    if (
      document.querySelector(".swiper-button-next") &&
      document.querySelector(".swiper-button-prev")
    ) {
      // hover section slider
      if (
        target.tagName.toLowerCase() === "button" &&
        target.closest(".swiper-button-next")
      ) {
        tl.to(cursorPrev, {
          opacity: 0,
        }).to(
          cursorNext,
          {
            opacity: 1,
          },
          "-=0.5"
        );
      } else if (
        target.tagName.toLowerCase() === "button" &&
        target.closest(".swiper-button-prev")
      ) {
        tl.to(cursorPrev, {
          opacity: 1,
        }).to(
          cursorNext,
          {
            opacity: 0,
          },
          "-=0.5"
        );
      } else {
        tl.to(".cursor", {
          opacity: 0,
        });
      }
    }
  };

  const mouseleaveHandler = () => {
    if (document.querySelector(".cursor")) {
      gsap.to(".cursor", {
        opacity: 0,
      });
    }
  };
  document.addEventListener("mousemove", mousemoveHandler);
  document.addEventListener("mouseleave", mouseleaveHandler);
}

/* ------------------------------- access page ------------------------------ */

if (document.getElementById("accesspage")) {
  console.log("accesspage");

  // ===== tabs switch =====
  $(document).on("click", ".tab-link", function () {
    let tabID = $(this).attr("data-tab");

    $(this).addClass("--active").siblings().removeClass("--active");
    $("#tab-" + tabID)
      .addClass("--active")
      .siblings()
      .removeClass("--active");
  });
}

/* ------------------------------- about page ------------------------------- */

if (document.getElementById("aboutpage")) {
  console.log("aboutpage");

  // ===== sticky =====
  function stickySidebar() {
    let ele = $(".kodawari__right");
    let parent = ele.parent();

    let paddingTop = parseInt(
      parent.css("padding-top").replace(/[^-\d\.]/g, "")
    );
    let paddingBottom = parseInt(
      parent.css("padding-bottom").replace(/[^-\d\.]/g, "")
    );
    let top = paddingTop;

    let tempTop = $(window).scrollTop();

    init();

    $(window).scroll(function () {
      init();
    });

    $(window).resize(function () {
      paddingTop = parseInt(parent.css("padding-top").replace(/[^-\d\.]/g, ""));
      paddingBottom = parseInt(
        parent.css("padding-bottom").replace(/[^-\d\.]/g, "")
      );
      top = paddingTop;

      init();
    });

    function init() {
      let width = parent.width();
      let height = ele.height();

      let windowTop = $(window).scrollTop();
      let windowHeight = $(window).height();
      let bottom = windowTop + paddingTop + height;
      if (paddingTop + height + paddingBottom > windowHeight) {
        bottom = windowTop + windowHeight - paddingBottom;
      }

      let diff = height + paddingBottom + paddingTop - windowHeight;

      if (diff > 0 && bottom < parent.outerHeight() + paddingBottom) {
        top -= windowTop - tempTop;
        if (top < paddingTop - diff) {
          top = paddingTop - diff;
        }
        if (top > paddingTop) {
          top = paddingTop;
        }
      }

      if (windowTop > 0) {
        ele.css({
          position: "fixed",
          top: top,
          bottom: "auto",
        });
      }
      if (bottom > parent.outerHeight()) {
        if (diff > 0) {
          top = paddingTop - diff;
        }
        ele.css({
          position: "absolute",
          top: "auto",
          bottom: 0,
        });
      }
      tempTop = windowTop;
    }
  }
  stickySidebar();

  // ===== scroll logo =====
  $(document).on("scroll", function () {
    if (
      $(document).scrollTop() - 350 >
        $(".kodawari__section.intro").offset().top &&
      $(window).width() < 1024
    ) {
      $(".aboutpage .kodawari__logo").addClass("--active");
    } else {
      $(".aboutpage .kodawari__logo").removeClass("--active");
    }
  });

  // ===== scroll section =====

  const sections = $(".kodawari__section[id]"),
    sidebar = $(".kodawari__sidebar"),
    mainvisualAbout = $(".kodawari__items"),
    sidebar_height = sidebar.outerHeight();

  $(window).on("scroll", function () {
    let cur_pos = $(this).scrollTop() + 500;

    sections.each(function () {
      let top = $(this).offset().top - sidebar_height,
        bottom = top + $(this).outerHeight(),
        items = $('[data-scrollto="' + $(this).attr("id") + '"]');

      if (cur_pos >= top && cur_pos <= bottom) {
        if (!items.hasClass("--active")) {
          mainvisualAbout.removeClass("--active");
          sidebar.find("a").removeClass("--active");
          sections.removeClass("--active");

          items.addClass("--active");
          sidebar
            .find('a[href="#' + $(this).attr("id") + '"]')
            .addClass("--active");
        }
      }
    });
  });

  // ===== toggle popup kodawari =====

  const kodawari = $("[data-popup-toggler]");
  const kodawariPopup = $(".kodawari__popup");

  // click popup
  kodawari.each(function (e) {
    $(this).on("click", function () {
      const selector = $(
        "[data-popup-" + $(this).attr("data-popup-toggler") + "]"
      );
      if (!selector.hasClass("--active")) {
        kodawariPopup.removeClass("--active");
        selector.addClass("--active");

        $("body").addClass("--no-scroll");
      }
    });
  });

  // close popup
  $("[close-popup]").each(function () {
    $(this).on("click", function () {
      kodawariPopup.removeClass("--active");
      $("body").removeClass("--no-scroll");
    });
  });
}
