/* sun_navi_api_ua */
var sun_navi_api_ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.21 (KHTML, like Gecko) scripts.py Safari/537.21";
if (navigator.userAgent.indexOf(sun_navi_api_ua) != -1){
	document.documentElement.className += 'sun_navi_api_ua';
	document.write('<style type="text/css">html.sun_navi_api_ua #suntoryCommonHeader,html.sun_navi_api_ua #suntoryCommonFooter{display:none;}</style>');
}
/* /sun_navi_api_ua */

/* transfer
==================================== */
if (document.getElementsByName ('spurl').item(0) || document.getElementsByName ('pcurl').item(0)){
	document.write('<link href="//www.suntory.co.jp/sun_common/transfer/css/transfer.css" rel="stylesheet">');
	document.write('<script src="//www.suntory.co.jp/sun_common/transfer/js/transfer.js" charset="UTF-8"></scr' + 'ipt>');
}

/* sun_navi_design
==================================== */
var sun_navi_design = "sun_navi_rwd_design";
if (document.getElementsByName ('pcurl').item(0) || document.getElementsByName ('pcurl_none').item(0)){
	sun_navi_design = "sun_navi_sp_design";
}else if (document.getElementsByName ('spurl').item(0) || document.getElementsByName ('spurl_none').item(0)){
	sun_navi_design = "sun_navi_pc_design";
}

var sun_navi_device = "sun_navi_pc_device";
if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
	sun_navi_device = "sun_navi_sp_device";
}

/* sun_navi_viewport
==================================== */
function sun_navi_pc_viewport(){}
function sun_navi_sp_viewport(){document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0">');}

if (sun_navi_device == "sun_navi_sp_device"){
	if (sun_navi_design == "sun_navi_pc_design"){
		sun_navi_pc_viewport();
	}else{
		if (document.getElementsByName ('viewport').item(0)){
		}else{
			sun_navi_sp_viewport();
		}
	}
}else{
	if (sun_navi_design == "sun_navi_sp_design"){
		if (document.getElementsByName ('viewport').item(0)){
		}else{
			sun_navi_sp_viewport();
		}
	}else{
		sun_navi_pc_viewport();
	}
}

/* sun_navi_external
==================================== */
function sun_navi_pc_external(){
	document.write('<link href="//www.suntory.co.jp/sun_common/sun_navi/responsive/css/sun_navi_pc.css" rel="stylesheet">');
	document.write('<script src="//www.suntory.co.jp/sun_common/sun_navi/responsive/js/sun_navi_pc.js" charset="UTF-8"></scr' + 'ipt>');
}

function sun_navi_sp_external(){
	document.write('<link href="//www.suntory.co.jp/sun_common/sun_navi/responsive/css/sun_navi_sp.css" rel="stylesheet">');
	document.write('<script src="//www.suntory.co.jp/sun_common/sun_navi/responsive/js/sun_navi_sp.js" charset="UTF-8"></scr' + 'ipt>');
}

if (sun_navi_design == "sun_navi_sp_design"){
	sun_navi_sp_external();
}else{
	if (window.matchMedia("only screen and (max-width:767px)").matches){
		if (sun_navi_design == "sun_navi_pc_design"){
			sun_navi_pc_external();
		}else{
			sun_navi_sp_external();
		}
	}else{
		sun_navi_pc_external();
	}
}

document.write('<script src="//www.suntory.co.jp/sun_common/sun_navi/config/type.js" charset="UTF-8"></scr' + 'ipt>');
document.write('<script src="//www.suntory.co.jp/sun_common/sun_navi/responsive/js/change.js" charset="UTF-8"></scr' + 'ipt>');


/* responsive_resize
==================================== */
if (sun_navi_design == "sun_navi_rwd_design" && sun_navi_device == "sun_navi_pc_device"){
	var timer = false;
	var bWidth = window.innerWidth;
	function rebuild(){
		if (timer !== false){//リサイズ途中の場合clearTimeoutする
			clearTimeout(timer);
		}
		timer = setTimeout(function(){//リサイズ途中で発火させないためにsetTimeoutにしておく
			var aWidth = window.innerWidth;
			if ((aWidth <= 768 && bWidth > 768)||(bWidth <= 768 && aWidth > 768)){
				window.location.reload();
			}
		}, 300);
	}
	
	window.onresize = rebuild;
	
}