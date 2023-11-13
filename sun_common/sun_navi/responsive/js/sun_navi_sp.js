/*window.onload = function () {*/

// header
window.addEventListener('DOMContentLoaded', function() {
  var bodyElem = document.getElementsByTagName('body');
  var spMenuBtn = document.getElementById('suntoryCommonHd_sp_menu_btn_trigger');
  var spMenuActive = document.getElementById('suntoryCommonHd_01');
  var subMenuList = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_layer1_open .suntoryCommonHd_menu_02_dropdown_list_ttl');
  var spHdMenu = document.getElementById('suntoryCommonHd_menu');
  spMenuBtn.setAttribute('aria-expanded', 'false');
  spHdMenu.setAttribute('aria-hidden', 'true');
  spMenuBtn.addEventListener('click', function () {
    if(spMenuActive.classList.contains('sp_menu_active')) {
      
      bodyElem[0].classList.remove('suntoryCommonHd_menu_on');
      spMenuActive.classList.add('sp_menu_close');
      
      setTimeout(function(){ 
        spMenuActive.classList.remove('sp_menu_active');
        spHdMenu.style.display = "none"; 
      }, 300);
      spMenuBtn.setAttribute('aria-expanded', 'false');
      spHdMenu.setAttribute('aria-hidden', 'true');
    } else {
      spMenuActive.classList.remove('sp_menu_close');
      spHdMenu.style.display = "block";
      spMenuActive.classList.add('sp_menu_active');
      bodyElem[0].classList.add('suntoryCommonHd_menu_on');
      spMenuBtn.setAttribute('aria-expanded', 'true');
      spHdMenu.setAttribute('aria-hidden', 'false');
    }
  });

  var menuWrap = document.getElementById('suntoryCommonHd_below');
  var menuLayer1 = document.getElementById('suntoryCommonHd_menu');
  var menuList = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_list_item');
  for (var i = 0, len = menuList.length; i < len; i++) {
    menuList[i].addEventListener('click', function (e) {
      e.target.setAttribute('aria-expanded', 'true');
      menuLayer1.classList.add('suntoryCommonHd_menu_layer1');
      var menuListParent = e.target.parentNode;
      menuListParent.querySelector('.suntoryCommonHd_menu_02_dropdown').setAttribute('aria-hidden', 'false');
      menuListParent.classList.add('suntoryCommonHd_menu_layer1_open');
      subMenuList = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_layer1_open .suntoryCommonHd_menu_02_dropdown_list_ttl');
      for (var i = 0, len = subMenuList.length; i < len; i++) {
        subMenuList[i].addEventListener('click', function (e) {
          e.target.setAttribute('aria-expanded', 'true');
          menuLayer1.classList.add('suntoryCommonHd_menu_layer2');
          var subMenuListParent = e.target.parentNode.parentNode;
          subMenuListParent.querySelector('.suntoryCommonHd_menu_02_dropdown_list_links').setAttribute('aria-hidden', 'false');
          subMenuListParent.classList.add('suntoryCommonHd_menu_layer2_open');
        })
      }
    })
  }

  var menuLayer1Back = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_dropdown_head_ttl_back');
  for (var i = 0, len = menuLayer1Back.length; i < len; i++) {
    menuLayer1Back[i].addEventListener('click', function (e) {
      menuLayer1.classList.remove('suntoryCommonHd_menu_layer1');
      var menuLayer1BackParent = e.target.closest('.suntoryCommonHd_menu_layer1_open');
      menuLayer1BackParent.classList.remove('suntoryCommonHd_menu_layer1_open');
      menuLayer1BackParent.querySelector('.suntoryCommonHd_menu_02_list_item').setAttribute('aria-expanded', 'false');
      menuLayer1BackParent.querySelector('.suntoryCommonHd_menu_02_dropdown').setAttribute('aria-hidden', 'ture');
    })
  }
  
  var menuLayer2Back = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_dropdown_list_item_back');
  for (var i = 0, len = menuLayer2Back.length; i < len; i++) {
    menuLayer2Back[i].addEventListener('click', function (e) {
      menuLayer1.classList.remove('suntoryCommonHd_menu_layer2');
      var menuLayer2BackParent = e.target.closest('.suntoryCommonHd_menu_layer2_open');
      menuLayer2BackParent.classList.remove('suntoryCommonHd_menu_layer2_open');
      menuLayer2BackParent.querySelector('.suntoryCommonHd_menu_02_dropdown_list_sp').setAttribute('aria-expanded', 'false');
      menuLayer2BackParent.querySelector('.suntoryCommonHd_menu_02_dropdown_list_links').setAttribute('aria-hidden', 'ture');
    })
  }

});


// fotter
window.addEventListener('DOMContentLoaded', function() {
  var spMenuFoot = this.document.querySelector('suntoryCommonHd_sp_menu_foot_wrap');
  var menuLayer1AddFoot = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_dropdown_inner');
  var menuLayer2AddFoot = document.querySelectorAll('#suntoryCommonHd_menu_02 .suntoryCommonHd_menu_02_dropdown_list_links');
  for (var i = 0, len = menuLayer1AddFoot.length; i < len; i++) {
    menuLayer1AddFoot[i].insertAdjacentHTML('beforeend', spMenuFoot.outerHTML);
  }
  for (var j = 0, len = menuLayer2AddFoot.length; j < len; j++) {
    menuLayer2AddFoot[j].setAttribute('aria-hidden', 'ture');
    menuLayer2AddFoot[j].insertAdjacentHTML('beforeend', spMenuFoot.outerHTML);
  }

  var footLinksBtn = document.querySelectorAll('#suntoryCommonFt_01 .suntoryCommonFt_links_accordion .suntoryCommonFt_links_term .suntoryCommonFt_links_term_item');
  var ftAccordionList = document.querySelectorAll('#suntoryCommonFt_01 .suntoryCommonFt_links_accordion .suntoryCommonFt_links_wrap');
  var ftAccordionListLink = document.querySelectorAll('#suntoryCommonFt_01 .suntoryCommonFt_links_accordion .suntoryCommonFt_links_wrap .suntoryCommonFt_links_list_item_link');
  for(var i = 0, len = ftAccordionListLink.length; i < len; i++) {
    ftAccordionListLink[i].tabIndex = -1;
  }
  for(var i = 0, len = ftAccordionList.length; i < len; i++) {
    ftAccordionList[i].setAttribute('aria-hidden', 'true');
  }
	for (var i = 0, len = footLinksBtn.length; i < len; i++) {
    // footLinksBtn[i].removeAttribute('href');
    footLinksBtn[i].addEventListener('click', function (e) {
		var parentElemDl = e.target.parentNode.parentNode;
    var FtLinksWrap = parentElemDl.querySelector('.suntoryCommonFt_links_wrap');
		var FtLinksList = parentElemDl.querySelector('.suntoryCommonFt_links_list');
    var FtLinksLinks = parentElemDl.querySelectorAll('.suntoryCommonFt_links_list_item_link');

		if(FtLinksList){
			parentElemDl.classList.toggle('suntoryCommonFt_links_open');
		}
		if(parentElemDl.classList.contains('suntoryCommonFt_links_open')){
			FtLinksList.style.height = FtLinksList.scrollHeight + 'px';
      e.target.setAttribute('aria-expanded', 'true');
      FtLinksWrap.setAttribute('aria-hidden', 'false');
      for (var i = 0, len = FtLinksLinks.length; i < len; i++) {
        FtLinksLinks[i].tabIndex = 0;
      }
		}else{
			FtLinksList.style.height = "0";
      e.target.setAttribute('aria-expanded', 'false');
      FtLinksWrap.setAttribute('aria-hidden', 'true');
      for (var i = 0, len = FtLinksLinks.length; i < len; i++) {
        FtLinksLinks[i].tabIndex = -1;
      }
		}
    return false;
	});
	}

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

  var suntoryCommonHdMenuInner = document.getElementById('suntoryCommonHd_menu_inner_column');
  for (i = 1; i < suntoryCommonHdMenuInner.children.length; i++) {
    suntoryCommonHdMenuInner.insertBefore(suntoryCommonHdMenuInner.children[i],suntoryCommonHdMenuInner.children[0]);
  }

  var suntoryCommonFtNav01 = document.getElementById('suntoryCommonFt_01');
  var suntoryCommonFtLinksContact = document.getElementById('suntoryCommonFt_links_contact');
  var suntoryCommonFtBannerLinks = document.getElementById('suntoryCommonFt_banner_links');
  suntoryCommonFtNav01.insertBefore(suntoryCommonFtBannerLinks, suntoryCommonFtLinksContact);
});