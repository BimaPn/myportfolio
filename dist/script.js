// navbar fixed
window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed")
    }
}


// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle('hidden');
})

// unrealesed projects
const unrealesed = document.querySelectorAll(".unrealesed");
unrealesed.forEach(object => {
    object.addEventListener("click", () => {
        alert("Project masih dalam tahap pengembangan");
    })
})