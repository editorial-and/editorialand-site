// ===== Hero load animation =====
window.addEventListener('load', () => {
  const hero = document.getElementById('hero');
  if (hero) hero.classList.add('is-loaded');
});

// ===== Header scroll behavior =====
const header = document.querySelector('header');

function updateHeader() {
  if (!header) return;
  if (window.scrollY > 80) {
    header.classList.remove('header-transparent');
    header.classList.add('glass-panel');
  } else {
    header.classList.add('header-transparent');
    header.classList.remove('glass-panel');
  }
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// ===== Mobile menu =====
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
let menuOpen = false;

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileNav.classList.toggle('hidden');
    const bars = [
      document.getElementById('bar1'),
      document.getElementById('bar2'),
      document.getElementById('bar3'),
    ];
    if (menuOpen) {
      bars[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.opacity = '1';
      bars[2].style.transform = '';
    }
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      menuOpen = false;
      document.getElementById('bar1').style.transform = '';
      document.getElementById('bar2').style.opacity = '1';
      document.getElementById('bar3').style.transform = '';
    });
  });
}

// ===== Smooth scroll with offset =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== Reveal on scroll =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
