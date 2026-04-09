// Popup open/close
const popup = document.getElementById("popup");

function openForm() {
    popup.classList.add("active");
}

function closeForm() {
    popup.classList.remove("active");
}

// Sluiten als je buiten de popup klikt
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        closeForm();
    }
});

// ==============================
// RelationCity form validatie
// ==============================
const rcFormWrapper = document.getElementById("rc_69ce9744ef9a9fdb61");

rcFormWrapper.addEventListener("submit", function(e){
    const form = e.target;
    const email = form.querySelector('input[type="email"]');
    const name = form.querySelector('input[type="text"]'); // pas aan als jouw veld anders heet

    if (!email.value.trim() || !name.value.trim()) {
        e.preventDefault();
        alert("Vul alle velden in voordat je registreert!");
        return false;
    }
});
