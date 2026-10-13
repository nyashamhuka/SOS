document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.main-nav a');
  const currentPath = window.location.pathname.split('/').pop();
  navLinks.forEach((link) => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});
