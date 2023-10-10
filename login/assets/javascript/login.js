document.getElementById("show-hide").onclick = function() {
    if (document.getElementById("password").type === "password") {
        document.getElementById("password").type = "teks";
    } else {
        document.getElementById("password").type = "password";
    }
}