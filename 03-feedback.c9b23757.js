var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,f=u||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,v=function(){return f.Date.now()};function m(e,t,n){var o,r,i,u,a,f,c=0,m=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(w,t),m?g(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=i}function w(){var e=v();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-f);return p?s(n,i-(e-c)):n}(e))}function O(e){return a=void 0,y&&o?g(e):(o=r=void 0,u)}function S(){var e=v(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(p)return a=setTimeout(w,t),g(f)}return void 0===a&&(a=setTimeout(w,t)),u}return t=b(t)||0,d(n)&&(m=!!n.leading,i=(p="maxWait"in n)?l(b(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},S.flush=function(){return void 0===a?u:O(v())},S}function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(d(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=d(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=o.test(e);return a||r.test(e)?i(e.slice(2),a?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form"),y=p.querySelector('input[name="email"]'),g=p.querySelector('textarea[name="message"]');p.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e={email:y.value,message:g.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})(),(()=>{const e=" ",t=" ";localStorage.removeItem("feedback-form-state"),y.value=e,g.value=t,console.log("Form submitted with values:",{email:y.value,message:g.value})})()}));
//# sourceMappingURL=03-feedback.c9b23757.js.map
