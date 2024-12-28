var oceanly=oceanly||{};function oceanlyDomReady(e){if("function"==typeof e)return"interactive"===document.readyState||"complete"===document.readyState?e():void document.addEventListener("DOMContentLoaded",e,!1)}Math.easeInOutQuad=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},oceanly.setupMainMenu={init:function(){var e,t,n,a,o,i=document.getElementById("site-navigation");i&&(t=i.getElementsByTagName("ul")[0],e=i.querySelector(".menu-toggle"),void 0===t?e&&(e.style.display="none"):(t.classList.add("nav-menu"),t=i.querySelectorAll(".main-navigation-arrow-btn"),n=i.querySelectorAll("li > a"),a=i.querySelectorAll("li:not(.menu-item-has-children) > a"),o=i.querySelectorAll("li:last-child:not(.menu-item-has-children) > a"),this.toggleNavigation(e,i),this.toggleTouchClass(i),this.collapseIfClickOutside(e,i),this.collapseIfEscapeKeyPress(e,i),this.collapseOnResize(e,i),this.toggleSubmenu(t,n,a,o),this.trapFocusInModal(i)))},toggleNavigation:function(t,n){t&&t.addEventListener("click",function(e){e.preventDefault(),n.classList.toggle("toggled"),t&&("true"===t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded","false"):t.setAttribute("aria-expanded","true"))})},toggleTouchClass:function(e){const t="main-navigation--touch";function n(){return"ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints}n()&&e.classList.add(t),window.addEventListener("resize",function(){n()?e.classList.add(t):e.classList.remove(t)})},collapseIfClickOutside:function(t,n){document.addEventListener("click",function(e){n.contains(e.target)||(n.classList.remove("toggled"),t&&t.setAttribute("aria-expanded","false"),[].forEach.call(n.querySelectorAll(".focus"),function(e){e.classList.remove("focus")}),[].forEach.call(n.querySelectorAll(".main-navigation-arrow-btn"),function(e){e.setAttribute("aria-expanded","false")}))})},collapseIfEscapeKeyPress:function(t,n){document.addEventListener("keyup",function(e){"Escape"===e.key&&(n.classList.remove("toggled"),t)&&t.setAttribute("aria-expanded","false")})},collapseOnResize:function(e,t){window.addEventListener("resize",function(){window.matchMedia("screen and (min-width: 576px)").matches&&(t.classList.remove("toggled"),e)&&e.setAttribute("aria-expanded","false")})},toggleSubmenu:function(e,t,n,a){function o(){for(var e=this,t=!1;"ul"!==e.tagName.toLowerCase();)"li"!==e.tagName.toLowerCase()||t||e.classList.contains("focus")||(t=e),e=e.parentElement;[].forEach.call(e.querySelectorAll(".focus"),function(e){e.classList.remove("focus")}),[].forEach.call(e.querySelectorAll(".main-navigation-arrow-btn"),function(e){e.setAttribute("aria-expanded","false")}),t&&(t.classList.add("focus"),this.setAttribute("aria-expanded","true"))}function i(e){var t=this.parentElement,n="Tab"===e.key,e=e.shiftKey;n&&e&&t.classList.contains("focus")?(t.classList.remove("focus"),this.setAttribute("aria-expanded","false")):!n||e||t.classList.contains("focus")||(t.classList.add("focus"),this.setAttribute("aria-expanded","true"))}function s(){for(var e=this,t=!1;!e.classList.contains("nav-menu");)t||"ul"!==e.tagName.toLowerCase()||([].forEach.call(e.querySelectorAll(".focus"),function(e){e.classList.remove("focus")}),[].forEach.call(e.querySelectorAll(".main-navigation-arrow-btn"),function(e){e.setAttribute("aria-expanded","false")}),t=!0),e=e.parentElement}function c(){for(var e=this;!e.classList.contains("nav-menu");)"li"===e.tagName.toLowerCase()&&!e.classList.contains("focus")&&(e.classList.add("focus"),e.querySelector(".main-navigation-arrow-btn"))&&this.setAttribute("aria-expanded","true"),e=e.parentElement}function l(e){var t,n=this,a="Tab"===e.key,e=e.shiftKey;if(a&&!e){for(;t=function(e){for(;(e=e.nextSibling)&&1!==e.nodeType;);return e}(n),n=n.parentElement,!t;);[].forEach.call(n.querySelectorAll(".focus"),function(e){e.classList.remove("focus")}),[].forEach.call(n.querySelectorAll(".main-navigation-arrow-btn"),function(e){e.setAttribute("aria-expanded","false")})}}[].forEach.call(e,function(e){e.addEventListener("click",o),e.addEventListener("keydown",i)}),[].forEach.call(t,function(e){e.addEventListener("focus",s)}),[].forEach.call(n,function(e){e.addEventListener("focus",c)}),[].forEach.call(a,function(e){e.addEventListener("keydown",l)})},trapFocusInModal:function(s){document.addEventListener("keydown",function(e){var t,n,a,o,i;!s.classList.contains("toggled")||(n=s.querySelectorAll("input, a, button")).length<1||(t=n[0],n=n[n.length-1],a=document.activeElement,o="Tab"===e.key,i=e.shiftKey,o&&!i&&n===a&&(e.preventDefault(),t.focus()),o&&i&&t===a&&(e.preventDefault(),n.focus()))})}},oceanly.backToTop={offset:300,offsetOpacity:1200,scrollDuration:700,init:function(){var e=document.querySelector(".back-to-top");e&&(this.handleScroll(e),this.handleClick(e))},handleScroll:function(t){var n=this.offset,a=this.offsetOpacity,o=!1;function e(){var e=window.scrollY||document.documentElement.scrollTop;n<e?t.classList.add("back-to-top--show"):(t.classList.remove("back-to-top--show"),t.classList.remove("back-to-top--fade-out")),a<e&&t.classList.add("back-to-top--fade-out"),o=!1}window.addEventListener("scroll",function(){o||(o=!0,window.requestAnimationFrame?window.requestAnimationFrame(e):setTimeout(e,250))})},handleClick:function(t){t.addEventListener("click",function(e){function n(e){var e=e-(c=c||e),t=(o<e&&(e=o),Math.easeInOutQuad(e,s,a-s,o));window.scrollTo(0,t),e<o?window.requestAnimationFrame(n):i&&i()}var a,o,i,s,c;e.preventDefault(),window.requestAnimationFrame?(a=0,o=this.scrollDuration,s=window.scrollY||document.documentElement.scrollTop,c=null,window.requestAnimationFrame(n)):window.scrollTo(0,0),t.blur()}.bind(this))}},oceanlyDomReady(function(){oceanly.setupMainMenu.init(),oceanly.backToTop.init()});