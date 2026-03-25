// Open / sluit popup
function openForm() {
  document.getElementById("popup").style.display = "flex";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}

// iOS / mobiele viewport fix
function setVh() {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
}

// Direct uitvoeren
setVh();

// Update bij resize of orientatie change
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);
