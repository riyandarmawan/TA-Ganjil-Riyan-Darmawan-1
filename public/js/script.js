const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItem = document.querySelector('.dropdown-item');

dropdownToggle.addEventListener('click', (e) => {
    if(!dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.toggle('show');
    }
})

document.addEventListener('click', (e) => {
    if (
        !dropdownToggle.contains(e.target) &&
        !dropdownMenu.contains(e.target) &&
        !dropdownItem.contains(e.target)
    ) {
        dropdownMenu.classList.remove('show');
    }
});
