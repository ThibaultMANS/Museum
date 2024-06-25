const ctaMenu = document.querySelector(".headerMenu__container");
const navBar = document.querySelector(".navLinks__container");
const navLink = document.querySelectorAll(".navLink");

function toggleNav(e) {
    navBar.classList.toggle("open");
}

function closeNav(e) {
    navBar.classList.remove("open");
}
ctaMenu.addEventListener("click", toggleNav);

navLink.forEach(link => {
    link.addEventListener("click", closeNav)
});
