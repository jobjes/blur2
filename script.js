// Open popup
function openForm() {
  document.getElementById("popup").classList.add("active");
}

// Close popup
function closeForm() {
  document.getElementById("popup").classList.remove("active");
}

// Close popup on click outside
window.addEventListener("click", function(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    closeForm();
  }
});

// Close popup with ESC key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeForm();
  }
});

// Form submission with success message
document.getElementById("notifyForm").addEventListener("submit", function(e){
  e.preventDefault();
  const button = this.querySelector(".submit");
  button.innerText = "Loading...";
  
  setTimeout(() => {
    button.innerText = "Added ✓";
    document.getElementById("successMessage").innerText = "You're on the list!";
  }, 1000);
});
