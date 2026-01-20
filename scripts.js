document.addEventListener('DOMContentLoaded', () => {
  // converte botões com data-product para link do WhatsApp correto
  document.querySelectorAll('.btn-whatsapp[data-product]').forEach(a => {
    const product = a.getAttribute('data-product');
    const phone = a.getAttribute('data-phone') || '551126562371';
    const text = encodeURIComponent(`Olá! Gostaria de pedir: ${product}`);
    a.href = `https://wa.me/${phone}?text=${text}`;
    a.setAttribute('rel', 'noopener noreferrer');
    a.setAttribute('target', '_blank');
  });

  // menu mobile

  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav ul');
  if (btn) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
const btn = document.querySelector('button[aria-label="Abrir menu"]');
const nav = document.querySelector('nav ul');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Monta links do WhatsApp dinamicamente a partir de data attributes
  document.querySelectorAll('.btn-whatsapp').forEach(a => {
    const product = a.dataset.product || 'Pedido';
    const phone = a.dataset.phone || '551126562371';
    const text = encodeURIComponent(`Olá! Gostaria de pedir: ${product}`);
    a.href = `https://wa.me/${phone}?text=${text}`;
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });

  // Toggle do menu mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });

  }

  // Scroll suave para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // fecha menu mobile ao clicar
        if (navList && navList.classList.contains('open')) navList.classList.remove('open');
      }
    });
  });
});