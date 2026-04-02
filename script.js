// --- Popup logica ---
const popup = document.getElementById("popup");
const openBtn = document.getElementById("blurButton");
const closeBtn = document.getElementById("popupClose");

// Open popup wanneer BLUR ALERT knop wordt geklikt
openBtn.addEventListener("click", () => {
    popup.style.display = "flex"; // flex zorgt voor centrering
});

// Sluit popup wanneer Close-knop wordt geklikt
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Sluit popup wanneer gebruiker buiten de popupContent klikt
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// --- Jaco-script / extra functionaliteit ---
// Voeg hier al je oude animaties, console.logs of andere functies toe
console.log('Jaco script geladen');

// Voorbeeld: je kan extra functies hier plaatsen
// function animateLogo() { ... }
// animateLogo();
