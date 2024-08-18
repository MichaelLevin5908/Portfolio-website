window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const offset = 120; // Offset to account for the navbar height

    document.querySelector(".Home h1").style.marginTop = (scrollY - offset) * 1.8 + "px";
    document.querySelector(".Home .mountains").style.marginTop = (scrollY - offset) * 1.8 + "px";
    document.querySelector(".Home .hill-1").style.marginTop = (scrollY - offset) * 1.6 + "px";
    document.querySelector(".Home .hill-2").style.marginTop = (scrollY - offset) * 1.4 + "px";
    document.querySelector(".Home .leaf-1").style.marginRight = (scrollY - offset) * 1.2 + "px";
    document.querySelector(".Home .leaf-2").style.marginLeft = (scrollY - offset) * 1.2 + "px";
    document.querySelector(".Home .leaf-1").style.marginTop = (scrollY - offset) * 0.4 + "px";
    document.querySelector(".Home .leaf-2").style.marginTop = (scrollY - offset) * 0.4 + "px";
});
