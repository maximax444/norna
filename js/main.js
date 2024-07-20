const header = document.querySelector(".header");
const body = document.querySelector("body");
document.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 0) {
        header.classList.add("swim");
    } else {
        header.classList.remove("swim");
    }

});
const headerBurg = document.querySelector(".header__burg");
const menu = document.querySelector(".header__menu");


headerBurg.addEventListener("click", (e) => {
    e.preventDefault();
    headerBurg.classList.toggle("active");
    if (!menu.classList.contains("active")) {
        body.style.overflow = "hidden";
        menu.classList.add("active");
    } else {
        headerBurg.classList.remove("active");
        menu.classList.remove("active");
        body.style.overflow = "visible";
    }
});