// Mobiele viewport fix
function setFullHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setFullHeight);
setFullHeight();

// Popup functies
function openForm() {
  document.getElementById("popup").classList.add("active");
}

function closeForm() {
  document.getElementById("popup").classList.remove("active");
}

// Click outside popup sluit
window.addEventListener("click", function(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) closeForm();
});

// ESC key sluit popup
document.addEventListener("keydown", function(event) {
  if(event.key === "Escape") closeForm();
});

// Form submit simulatie
document.getElementById("notifyForm").addEventListener("submit", function(e){
  e.preventDefault();
  const button = this.querySelector(".submit");
  button.innerText = "Loading...";
  
  setTimeout(() => {
    button.innerText = "Added ✓";
    document.getElementById("successMessage").innerText = "You're on the list!";
  }, 1000);
});
