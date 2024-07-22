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

function phoneInputValidation(event) {
    if (!("1234567890+\(\)\- ".indexOf(event.key) != -1)) {
        event.preventDefault();
    }
}

const swiper2 = new Swiper('.about-gal__slider', {

    slidesPerView: "auto",
    spaceBetween: 20,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.about-gal__next',
        prevEl: '.about-gal__prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: "auto",
            spaceBetween: 10
        },
        // when window width is >= 480px
        576: {
            slidesPerView: "auto",
            spaceBetween: 20,
        }
    }
});