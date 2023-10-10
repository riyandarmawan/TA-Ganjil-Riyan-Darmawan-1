let menu = document.getElementById("show");

function tampilkan() {
    menu.classList.toggle("buka-menu");
}

let munculinAngka = document.querySelectorAll(".nomor");
let interval = 4000;

munculinAngka.forEach((munculinAngka) => {
    let mulai = 0;
    let berhenti = parseInt(munculinAngka.getAttribute("data-val"));
    let durasi = Math.floor(interval / berhenti);
    let counter = setInterval(function () {
        mulai  += 1;;
        munculinAngka.textContent = mulai;
        if (mulai == berhenti) {
            clearInterval(counter);
        }
    }, durasi);
});