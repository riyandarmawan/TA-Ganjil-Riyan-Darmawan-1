// dropdown start
const dropdown = document.querySelector(".dropdown");
const arrow = document.querySelector(".arrow");
const dropdownMenu = document.querySelector(".dropdown-menu");

arrow.onclick = () => {
    dropdownMenu.classList.toggle("show");
};

document.addEventListener("click", (e) => {
    if (
        (!dropdown.contains(e.target) &&
        !arrow.contains(e.target) &&
        !dropdownMenu.contains(e.target))
    ) {
        dropdownMenu.classList.remove("show");
    }
});

const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.onclick = () => {
    navbar.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    if(!header.contains(e.target) && !navbar.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        navbar.classList.remove('show');
    }
})
// dropdown end
