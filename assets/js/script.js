// dropdown start
const dropdown = document.querySelector(".dropdown");
const arrow = document.querySelector(".arrow");
const dropdownMenu = document.querySelector(".dropdown-menu");

arrow.onclick = () => {
    dropdownMenu.classList.toggle("show");
};

document.addEventListener("click", (e) => {
    if (
        !dropdown.contains(e.target) &&
        !arrow.contains(e.target) &&
        !dropdownMenu.contains(e.target)
    ) {
        dropdownMenu.classList.remove("show");
    }
});

const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.onclick = () => {
    navbar.classList.toggle("show");
};

document.addEventListener("click", (e) => {
    if (
        !header.contains(e.target) &&
        !navbar.contains(e.target) &&
        !hamburgerMenu.contains(e.target)
    ) {
        navbar.classList.remove("show");
    }
});
// dropdown end

// statistics start
// menambahkan animasi pada statistics
const value = document.querySelectorAll(".value");
let interval = 1;

value.forEach((value) => {
    let startValue = 0;
    let endValue = parseInt(value.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        value.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
// statistics end
