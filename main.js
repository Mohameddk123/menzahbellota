/* =========================================
   MENZAH BELLOTA TOURS — JavaScript
   ========================================= */

const NAVBAR_SCROLL_THRESHOLD  = 60;
const SCROLLTOP_SHOW_THRESHOLD = 400;
const REVEAL_STAGGER_MS        = 100;

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
// Initialise immediately — covers page-restore scroll position on load
let navbarScrolled = window.scrollY > NAVBAR_SCROLL_THRESHOLD;
navbar.classList.toggle('scrolled', navbarScrolled);

// Guard: skip scroll-triggered class changes while mobile menu is open.
// When body becomes position:fixed (menu open), window.scrollY drops to 0
// which would wrongly remove the 'scrolled' class and flash the navbar.
let menuIsOpen = false;

window.addEventListener('scroll', () => {
  if (menuIsOpen) return;
  const shouldScroll = window.scrollY > NAVBAR_SCROLL_THRESHOLD;
  if (shouldScroll !== navbarScrolled) {
    navbarScrolled = shouldScroll;
    navbar.classList.toggle('scrolled', shouldScroll);
  }
}, { passive: true });

/* ---- Mobile nav toggle ---- */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

let _navScrollY = 0;

function openNav() {
  _navScrollY = window.scrollY;
  menuIsOpen = true;
  // Lock the navbar state so body.position='fixed' (scrollY→0) doesn't flip it
  navbarScrolled = _navScrollY > NAVBAR_SCROLL_THRESHOLD;
  navbar.classList.toggle('scrolled', navbarScrolled);
  document.body.style.position = 'fixed';
  document.body.style.top      = `-${_navScrollY}px`;
  document.body.style.width    = '100%';
  navToggle.classList.add('open');
  navMenu.classList.add('open');
}

function closeNav() {
  document.body.style.position = '';
  document.body.style.top      = '';
  document.body.style.width    = '';
  navToggle.classList.remove('open');
  navMenu.classList.remove('open');
  window.scrollTo(0, _navScrollY);
  // Re-enable scroll listener AFTER restoring position
  requestAnimationFrame(() => {
    navbarScrolled = _navScrollY > NAVBAR_SCROLL_THRESHOLD;
    navbar.classList.toggle('scrolled', navbarScrolled);
    menuIsOpen = false;
  });
}

navToggle.addEventListener('click', () => {
  navMenu.classList.contains('open') ? closeNav() : openNav();
});

navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeNav);
});

/* Close when tapping the overlay background (not a menu item) */
navMenu.addEventListener('click', (e) => {
  if (e.target === navMenu) closeNav();
});

/* ---- Reveal on scroll (Intersection Observer) ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * REVEAL_STAGGER_MS);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Active nav link on scroll ---- */
const navLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

/* ---- FAQ accordion ---- */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---- Contact form — send via WhatsApp ---- */
const contactForm = document.getElementById('contactForm');
const formSuccess  = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = contactForm.querySelector('[name="name"]').value.trim();
    const email   = contactForm.querySelector('[name="email"]').value.trim();
    const dates   = contactForm.querySelector('[name="dates"]').value.trim();
    const stay    = contactForm.querySelector('[name="stay"]').value;
    const message = contactForm.querySelector('[name="message"]').value.trim();

    const text = [
      '🌿 *New Booking Request — Menzah Bellota*',
      '',
      `👤 *Name:* ${name}`,
      `📧 *Email:* ${email}`,
      dates   ? `📅 *Dates:* ${dates}`     : '',
      stay    ? `🏕️ *Stay Type:* ${stay}`  : '',
      message ? `💬 *Message:* ${message}` : '',
    ].filter(Boolean).join('\n');

    const waNumber = '212670826124';
    window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text), '_blank');
  });
}

/* ---- Scroll To Top ---- */
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  let scrollTopVisible = false;

  window.addEventListener('scroll', () => {
    const shouldShow = window.scrollY > SCROLLTOP_SHOW_THRESHOLD;
    if (shouldShow !== scrollTopVisible) {
      scrollTopVisible = shouldShow;
      scrollTopBtn.classList.toggle('visible', shouldShow);
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

