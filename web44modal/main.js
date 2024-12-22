// گرفتن المان‌ها
let openModalBtn = document.getElementById("openModalBtn");
let myModal = document.getElementById("myModal");
let closeModalBtn = document.getElementById("closeModalBtn");
let closeSpan = document.querySelector(".close");

// باز کردن مدل
openModalBtn.onclick = function() {
    myModal.style.display = "block";
}

// بستن مدل از طریق دکمه "خروج"
closeModalBtn.onclick = function() {
    myModal.style.display = "none";
}

// بستن مدل با کلیک روی علامت ×
closeSpan.onclick = function() {
    myModal.style.display = "none";
}

// بستن مدل اگر خارج از مدل کلیک شود
window.onclick = function(event) {
    if (event.target === myModal) {
        myModal.style.display = "none";
    }
}