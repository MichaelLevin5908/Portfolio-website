window.addEventListener("scroll",()=>{
    document.querySelector(".Home h1").style.marginTop = window.scrollY * 1.8 + "px";
    document.querySelector(".Home .mountains").style.marginTop = window.scrollY * 1.8 + "px";
    document.querySelector(".Home .hill-1").style.marginTop = window.scrollY * 1.6 + "px";
    document.querySelector(".Home .hill-2").style.marginTop = window.scrollY * 1.4 + "px";
    document.querySelector(".Home .leaf-1").style.marginRight = window.scrollY * 1.2 + "px";
    document.querySelector(".Home .leaf-2").style.marginLeft = window.scrollY * 1.2 + "px";
    document.querySelector(".Home .leaf-1").style.marginTop = window.scrollY * .4 + "px";
    document.querySelector(".Home .leaf-2").style.marginTop = window.scrollY * .4 + "px";
});