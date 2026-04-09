// Popup element ophalen
const popup = document.getElementById("popup");

// Open popup
function openForm() {
    popup.classList.add("active");
}

// Sluit popup
function closeForm() {
    popup.classList.remove("active");
}

// Sluiten als je buiten de popup klikt
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        closeForm();
    }
});
