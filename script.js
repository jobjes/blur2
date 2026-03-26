// Open popup
function openForm() {
  document.getElementById("popup").style.display = "flex";
}

// Close popup
function closeForm() {
  document.getElementById("popup").style.display = "none";
}

// Optional: close popup on click outside form
window.onclick = function(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    closeForm();
  }
};
