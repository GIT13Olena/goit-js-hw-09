!function(){let t;document.querySelector("[data-start]").addEventListener("click",(()=>{t||(t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),document.querySelector("[data-start]").disabled=!0)})),document.querySelector("[data-stop]").addEventListener("click",(()=>{clearInterval(t),t=null,document.querySelector("[data-start]").disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.0914558f.js.map
