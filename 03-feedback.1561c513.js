!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var o,i,u,f,a,c,l=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function S(e){return l=e,a=setTimeout(h,t),s?j(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function h(){var e=v();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return d?p(n,u-(e-l)):n}(e))}function w(e){return a=void 0,g&&o?j(e):(o=i=void 0,f)}function x(){var e=v(),n=T(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return S(c);if(d)return a=setTimeout(h,t),j(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(b(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},x.flush=function(){return void 0===a?f:w(v())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const j="feedback-form-state",S={},T={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};T.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(j)})),T.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(S)),console.log(S)}),500)),function(){const e=JSON.parse(localStorage.getItem(j));e&&(T.input.value=e.email,T.textarea.value=e.message)}()}();
//# sourceMappingURL=03-feedback.1561c513.js.map
