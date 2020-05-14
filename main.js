var mainbody = document.getElementById("main-body");
var darkmod = 0;
function darkmod_use(){console.log("get click");if (darkmod == 1){mainbody.classList.remove("mdui-theme-layout-dark");darkmod = 0;} else {mainbody.classList.add("mdui-theme-layout-dark");darkmod = 1;}};
