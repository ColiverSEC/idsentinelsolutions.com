// Grab elements
const toggleBtn = document.getElementById("theme-toggle");
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");

// ===================
// Hamburger toggle
// ===================
hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Collapse menu when clicking a link (mobile only)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {   // only collapse on mobile
      navLinks.classList.remove("show");
    }
  });
});

// ===================
// Dark mode toggle
// ===================
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
} else {
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});
