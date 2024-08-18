let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"; // Hide the navbar when scrolling down
    } else {
        navbar.style.top = "0"; // Show the navbar when scrolling up
    }
    lastScrollTop = scrollTop;
});

