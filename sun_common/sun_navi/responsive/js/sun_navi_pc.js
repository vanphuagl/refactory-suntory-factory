/* header */
window.addEventListener('DOMContentLoaded', function() {
  var navList = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_list');
  var navListBtn = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_list_item');
  var dropdownItem = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_dropdown a, #suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_dropdown button');
  var suntoryCommonHeader = document.getElementById('suntoryCommonHeader');

  for (var i = 0, len = navList.length; i < len; i++) {
    navList[i].addEventListener('mouseover', function (e) {
      if(!(e.currentTarget.classList.contains('suntoryCommonHd_menu_02_list_01'))) {
        var dropdownMenu = e.currentTarget.querySelector('.suntoryCommonHd_menu_02_dropdown');
        e.currentTarget.classList.add('menu_02_active');
        suntoryCommonHeader.classList.add('menu_02_modal_on');
        dropdownMenu.style.display = "block";
        e.currentTarget.querySelector('.suntoryCommonHd_menu_02_list_item').setAttribute('aria-expanded', 'true');
        dropdownMenu.setAttribute('aria-hidden', 'false');
      }
    })
  }
  for (var i = 0, len = navList.length; i < len; i++) {
    navList[i].addEventListener('mouseleave', function (e) {
      if(!(e.currentTarget.classList.contains('suntoryCommonHd_menu_02_list_01'))) {
        e.currentTarget.classList.remove('menu_02_active');
        suntoryCommonHeader.classList.remove('menu_02_modal_on');
        var dropdownMenu = e.currentTarget.querySelector('.suntoryCommonHd_menu_02_dropdown');
        e.currentTarget.querySelector('.suntoryCommonHd_menu_02_list_item').setAttribute('aria-expanded', 'false');
        dropdownMenu.setAttribute('aria-hidden', 'true');
        setTimeout(function(){ 
          dropdownMenu.style.display = "none"; 
        }, 300);
      }
    })
  }

  for (var i = 0, len = navListBtn.length; i < len; i++) {
    navListBtn[i].addEventListener('focus', function (e) {  
      var navListParent = e.target.parentNode;
      var dropdownMenu = navListParent.querySelector('.suntoryCommonHd_menu_02_dropdown');
      
      if(!(navListParent.classList.contains('menu_02_active'))) {
        var navListActive = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_list.menu_02_active');
        if(navListActive.length) {
          navListActive[0].classList.remove('menu_02_active');
          suntoryCommonHeader.classList.remove('menu_02_modal_on');
          if(navListActive[0].querySelector('.suntoryCommonHd_menu_02_dropdown')) {
            navListActive[0].querySelector('.suntoryCommonHd_menu_02_dropdown').style.display = "none";
            navListActive[0].querySelector('.suntoryCommonHd_menu_02_list_item').setAttribute('aria-expanded', 'false');
            navListActive[0].querySelector('.suntoryCommonHd_menu_02_dropdown').setAttribute('aria-hidden', 'true');
          }
        }
        
      }
    
      navListParent.classList.add('menu_02_active');
      suntoryCommonHeader.classList.add('menu_02_modal_on');
      if(dropdownMenu) {
        dropdownMenu.style.display = "block";
        e.target.setAttribute('aria-expanded', 'true');
        dropdownMenu.setAttribute('aria-hidden', 'false');
      }
    });
  }

  var closeBtn = document.querySelector('#suntoryCommonHd_menu_02_list_05_dropdown .suntoryCommonHd_menu_02_dropdown_head_close_btn');
    closeBtn.addEventListener('blur', function () {
      setTimeout(function(){
        var navListActive = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_list.menu_02_active');
        if(!(document.activeElement.closest('.suntoryCommonHd_menu_02_list')) && navListActive[0]) {
          navListActive[0].classList.remove('menu_02_active');
          suntoryCommonHeader.classList.remove('menu_02_modal_on');
          if(navListActive[0].querySelector('.suntoryCommonHd_menu_02_dropdown')) {
            navListActive[0].querySelector('.suntoryCommonHd_menu_02_dropdown').style.display = "none";
            navListActive[0].querySelector('.suntoryCommonHd_menu_02_list_item').setAttribute('aria-expanded', 'false');
            navListActive[0].querySelector('.suntoryCommonHd_menu_02_dropdown').setAttribute('aria-hidden', 'true');
          }
        }
    }, 1);
      
    });

  var dropdownCloseBtn = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_dropdown_head_close_btn');
  for (var i = 0, len = dropdownCloseBtn.length; i < len; i++) {
    dropdownCloseBtn[i].addEventListener('click', function (e) {
      var targetMenu;
      for(var j = 0, len = navListBtn.length; j < len; j++){
        var navListParent = navListBtn[j].parentNode;
        navListBtn[j].setAttribute('aria-expanded', 'false');
        if(navListParent.classList.contains('menu_02_active')) {
          navListParent.classList.remove('menu_02_active');
          suntoryCommonHeader.classList.remove('menu_02_modal_on');
          targetMenu = navListParent.querySelector('.suntoryCommonHd_menu_02_dropdown');
          setTimeout(function(){ 
            targetMenu.style.display = "none";
            targetMenu.setAttribute('aria-hidden', 'true');
          }, 300);
        }
      }
    })
  }


  var searchInputBtn = document.getElementById('suntoryCommonHd_submenu_search_open');
  var searchInput = document.getElementById('suntoryCommonHd_submenu_search_input');
  searchInputBtn.addEventListener('click', function () {
    var searchForm = searchInputBtn.parentNode;
    searchForm.classList.add('suntoryCommonHd_submenu_search_active');
    searchInputBtn.setAttribute('aria-expanded', 'true');
    searchInput.setAttribute('aria-hidden', 'false');
  });

  var toContentsFocus = document.getElementById('to_contents');
  var suntoryCommonHeadFocus = document.getElementById('suntoryCommonHeader');
  toContentsFocus.addEventListener('focus', function () {
    suntoryCommonHeadFocus.classList.add('suntoryCommonHd_to_contents_focus');
  });
  toContentsFocus.addEventListener('blur', function () {
    suntoryCommonHeadFocus.classList.add('suntoryCommonHd_to_contents_blur');
    setTimeout(function(){ 
      suntoryCommonHeadFocus.classList.remove('suntoryCommonHd_to_contents_focus');
      suntoryCommonHeadFocus.classList.remove('suntoryCommonHd_to_contents_blur');
    }, 300);
  })
});