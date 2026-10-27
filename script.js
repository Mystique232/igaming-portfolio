// script.js - vanilla JS for iGaming Affiliate Manager portfolio

(function () {
  'use strict';

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  function setActiveLink() {
    let current = '';
    const scrollY = window.scrollY + 120;
    sections.forEach((sec) => {
      if (scrollY >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form validation
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function setInvalid(input, invalid) {
    input.classList.toggle('invalid', invalid);
  }

  function validateField(input) {
    const value = input.value.trim();
    let message = '';
    if (input.required && value === '') {
      message = 'This field is required.';
    } else if (input.type === 'email' && value !== '') {
      // basic email check
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!ok) message = 'Please enter a valid email address.';
    } else if (input.minLength > 0 && value.length > 0 && value.length < input.minLength) {
      message = 'Must be at least ' + input.minLength + ' characters.';
    }
    const errorId = input.id + 'Error';
    showError(errorId, message);
    setInvalid(input, Boolean(message));
    return message === '';
  }

  if (form) {
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach((f) => {
      f.addEventListener('blur', () => validateField(f));
      f.addEventListener('input', () => {
        if (f.classList.contains('invalid')) validateField(f);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let allValid = true;
      fields.forEach((f) => {
        if (!validateField(f)) allValid = false;
      });

      if (!allValid) {
        if (status) {
          status.textContent = 'Please fix the highlighted fields and try again.';
          status.className = 'form-status error';
        }
        return;
      }

      // NOTE: This form has no backend connected. It validates input only.
      // To actually deliver messages, connect the form to a form service
      // (Formspree, Netlify Forms, Getform, etc.) or your own backend endpoint.
      // Example with Formspree: set form action="https://formspree.io/f/your-id" method="POST"
      // and remove e.preventDefault() above (or submit via fetch).
      if (status) {
        status.textContent = 'Thanks! Your message passed validation. (No backend is connected yet, so nothing was sent.)';
        status.className = 'form-status success';
      }
      form.reset();
      fields.forEach((f) => {
        f.classList.remove('invalid');
        showError(f.id + 'Error', '');
      });
    });
  }

})();
