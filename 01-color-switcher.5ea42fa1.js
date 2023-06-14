const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body");let o=null;function c(){n.style.backgroundColor=getRandomHexColor()}e.addEventListener("click",(function(){e.disabled=!0,o=setInterval(c,1e3)})),t.addEventListener("click",(function(){e.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.5ea42fa1.js.map
