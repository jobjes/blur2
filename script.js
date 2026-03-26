// Open popup
function openForm() {
  document.getElementById("popup").classList.add("active");
}

// Close popup
function closeForm() {
  document.getElementById("popup").classList.remove("active");
}

// Click outside popup to close
window.addEventListener("click", function(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) closeForm();
});

// ESC key to close popup
document.addEventListener("keydown", function(event) {
  if(event.key === "Escape") closeForm();
});

// Form submit
document.getElementById("notifyForm").addEventListener("submit", function(e){
  e.preventDefault();
  const button = this.querySelector(".submit");
  button.innerText = "Loading...";
  
  setTimeout(() => {
    button.innerText = "Added ✓";
    document.getElementById("successMessage").innerText = "You're on the list!";
  }, 1000);
});
