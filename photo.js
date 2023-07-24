// Toggle Navbar Menu on Mobile
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-link');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetPosition = document.querySelector(targetId).offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Intersection Observer for Animation
const sections = document.querySelectorAll('section');

const options = {
  root: null,
  threshold: 0.2,
  rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('animated');
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  sectionObserver.observe(section);
});