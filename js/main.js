// Scripts del sitio Miu Resolados.

// Navbar: se achica cuando el usuario scrollea un poco
const header = document.querySelector(".site-header");
const SCROLL_THRESHOLD = 40;

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
