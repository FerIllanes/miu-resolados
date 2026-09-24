// Scripts del sitio Miu Resolados.

// Navbar: se achica cuando el usuario scrollea un poco
const header = document.querySelector(".site-header");
const SCROLL_THRESHOLD = 40;

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Menú hamburguesa
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuIcon = document.querySelector("[data-menu-icon]");
const mobileMenu = document.getElementById("mobile-menu");
const DESKTOP_QUERY = window.matchMedia("(min-width: 1280px)");

function setMenuOpen(open) {
  mobileMenu.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  menuIcon.textContent = open ? "close" : "menu";
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(mobileMenu.hidden);
});

// Cerrar al elegir una sección
mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

// Cerrar con Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileMenu.hidden) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

// Cerrar si la pantalla pasa a desktop
DESKTOP_QUERY.addEventListener("change", (event) => {
  if (event.matches) setMenuOpen(false);
});
