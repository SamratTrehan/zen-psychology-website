// Card's Visiblility Toggle
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.card').forEach(card => observer.observe(card));
// Form Submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

function toggleMenu() {
  const menu = document.querySelector('.hamburger-menu');
  menu.classList.toggle('show');
}
// Overlay Close on List Item selectd
document.querySelectorAll('.hamburger-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger-menu').classList.remove('show');
  });
});

// Nav Scroll Feature
let lastScroll = 0;
const navbar = document.querySelector("nav");
let ticking = false;

function onScroll() {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
});