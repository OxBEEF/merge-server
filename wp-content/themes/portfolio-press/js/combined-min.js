jQuery(document).ready(function(a){function b(){document.body.clientWidth>780&&!f.submenu&&(f.menu.attr("style",""),f.nav.find("div > ul > li").each(function(){var b=a(this).find("> ul");if(b.length>0){var c=a(this).outerWidth(!0),d=b.outerWidth(!0),e=parseInt((d-c)/2);b.css("margin-left",-e+"px")}}),f.submenu=!0)}function c(){document.body.clientWidth<=780&&f.submenu&&(f.nav.find("ul").css("margin-left",""),f.submenu=!1)}function d(){b(),c()}function e(a,b){var c=null;return function(){var d=this,e=arguments;clearTimeout(c),c=setTimeout(function(){a.apply(d,e)},b)}}var f={nav:a("#navigation"),menu:a("#navigation .nav-menu"),submenu:!1};!function(){return f.nav&&(button=f.nav.find(".menu-toggle"),button)?f.menu&&f.menu.children().length?void button.on("click",function(){f.nav.toggleClass("toggled-on"),f.menu.slideToggle("200")}):void button.hide():void 0}(),a("#branding .col-width").width()<a("#logo").outerWidth()+f.nav.outerWidth()&&a("body").addClass("clear-menu"),b(),a(window).on("resize",e(d,100))}),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",f=document.createElement("div");f.innerHTML='<p>x</p><style id="fit-vids-style">'+e+"</style>",d.appendChild(f.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=".fitvidsignore";c.ignore&&(d=d+", "+c.ignore);var e=a(this).find(b.join(","));e=e.not("object object"),e=e.not(d),e.each(function(){var b=a(this);if(!(b.parents(d).length>0||"embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){b.css("height")||b.css("width")||!isNaN(b.attr("height"))&&!isNaN(b.attr("width"))||(b.attr("height",9),b.attr("width",16));var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),e=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),f=c/e;if(!b.attr("id")){var g="fitvid"+Math.floor(999999*Math.random());b.attr("id",g)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*f+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),jQuery(document).ready(function(a){a.fn.fitVids&&a(".hentry").fitVids()});