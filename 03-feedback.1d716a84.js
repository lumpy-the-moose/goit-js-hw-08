!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),s?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&r?p(e):(r=i=void 0,u)}function T(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j,O,h=document.querySelector(".feedback-form"),w=document.querySelector('[name="email"]'),T=document.querySelector('[name="message"]');if(localStorage.getItem("feedback-form-state")){var x=JSON.parse(localStorage.getItem("feedback-form-state"));j=w.value=x.email,O=T.value=x.message}h.addEventListener("input",e(t)((function(e){e.target===w&&(j=e.target.value),e.target===T&&(O=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify({email:j,message:O}))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:j,message:O}),j="",O="",localStorage.setItem("feedback-form-state",""),h.reset()}))}();
//# sourceMappingURL=03-feedback.1d716a84.js.map
