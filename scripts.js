// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#navbar .nav-link');

  // Smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Highlight active section in navbar
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', function () {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
});
