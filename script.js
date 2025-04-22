// Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navList    = document.querySelector('.nav-list');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navList.classList.toggle('active');
});

// Typing Effect
const typedText = document.getElementById('typed-text');
const phrase    = "Hello, I'm Isaac Urban.";
let idx = 0;
function type() {
  if (idx < phrase.length) {
    typedText.textContent += phrase[idx++];
    setTimeout(type, 100);
  }
}
window.addEventListener('load', type);
