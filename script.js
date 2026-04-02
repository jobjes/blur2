// --- Popup logica ---
const popup = document.getElementById("popup");
const openBtn = document.getElementById("blurButton");
const closeBtn = document.getElementById("popupClose");

openBtn.addEventListener("click", () => {
    popup.style.display = "flex"; // flex zorgt voor centrering
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// --- Jaco-script / extra functionaliteit ---
// Plaats hier alle eerdere functies of animaties van je oude script.js
// Bijvoorbeeld: console.log('Jaco script geladen');
// Popup open/close

const popup = document.getElementById("popup");

function openForm() {
    popup.classList.add("active");
}

function closeForm() {
    popup.classList.remove("active");
}

window.addEventListener("click", (event) => {
    if(event.target === popup){
        closeForm();
    }
});

// Form handling
const notifyForm = document.getElementById("notifyForm");
const successMessage = document.getElementById("successMessage");

notifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const button = notifyForm.querySelector(".submit");
    button.disabled = true;
    button.innerText = "Loading...";

    setTimeout(() => {
        button.innerText = "Added ✓";
        successMessage.innerText = "You're on the list!";
        
        // Reset form na 2 seconden
        setTimeout(() => {
            notifyForm.reset();
            button.disabled = false;
            button.innerText = "Notify me";
            successMessage.innerText = "";
            closeForm();
        }, 2000);

    }, 1000);
});
