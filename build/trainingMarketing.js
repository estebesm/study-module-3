(()=>{var e={941:()=>{const e=document.getElementById("header__nav"),t=document.getElementById("burger-button"),o=document.getElementById("header-close-button");t.addEventListener("click",(()=>{document.body.style.overflow="hidden",e.classList.remove("disabled"),e.classList.add("active")})),o.addEventListener("click",(()=>{document.body.style.overflow="visible",e.classList.remove("active"),e.classList.add("disabled")}))}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var d=t[s]={exports:{}};return e[s](d,d.exports,o),d.exports}(()=>{"use strict";const e=document.querySelectorAll(".consultation form label"),t=document.querySelector(".consultation form button");t.addEventListener("click",(()=>{e.forEach((e=>{const t=e.childNodes[1];""===t.value&&e.classList.add("error"),t.addEventListener("input",(()=>{""===t.value?e.classList.add("error"):e.classList.remove("error")}))}));const o=!Array.from(e).find((e=>e.classList.contains("error"))),s=e=>Array.from(e.childNodes).find((e=>"INPUT"===e.nodeName));o&&(t.disabled=!0,t.textContent="идет загрузка...",setTimeout((()=>{console.log({name:s(e[0]).value,email:s(e[0]).value}),e.forEach((e=>{e.childNodes[1].value=""})),t.disabled=!1,t.textContent="Получить консультацию"}),3e3))})),o(941)})()})();