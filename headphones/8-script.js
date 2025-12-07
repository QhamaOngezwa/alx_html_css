const hamburger = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  hamburger.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});
