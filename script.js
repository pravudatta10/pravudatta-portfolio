// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-bs-theme') === 'dark';
  body.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  darkModeToggle.innerHTML = isDark ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Persist dark mode preference (optional)
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    body.setAttribute('data-bs-theme', theme);
    darkModeToggle.innerHTML = theme === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
  }
});
body.addEventListener('DOMAttrModified', function() {
  localStorage.setItem('theme', body.getAttribute('data-bs-theme'));
});
