// ===========================
// Open / sluit popup
// ===========================
function openForm() {
  document.getElementById("popup").style.display = "flex";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}

// ===========================
// iOS / mobiele fullscreen fix
// ===========================
function setVh() {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
}

// Voer direct uit
setVh();

// Update bij resize
window.addEventListener('resize', setVh);
