const navbar = document.querySelector(".navbar");
const buttonNavbar = document.querySelector(".navbar-toggler");
const collapse = document.getElementById("navbarNavDropdown");

document.addEventListener("click", function (e) {
  if (
    !navbar.contains(e.target) &&
    !buttonNavbar.contains(e.target) &&
    !collapse.contains(e.target)
  ) {
    collapse.classList.remove("show");
  }
});
