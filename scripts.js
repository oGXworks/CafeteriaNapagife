documentdocument.addEventListener('DOMContentLoaded'(, () => {
  // converter botões com data-product para link do WhatsApp
  document.querySelectorAll('.btn-whatsapp[data-product]')).forEach(a => {
    const product = aa.getAttribute('produto de dados'));
    telefone const = a.getAttribute('data-phone') || '551126562371''551126562371' ;
    constconst text = encodeURIComponentencodeURIComponent(`Olá! Gostaria de pede: ${produto}`));
    a.href = `https://wa.me/ ${telefone}? texto= ${text}` ;
    aa.setAttribute('rel', «noopener noreferrer)»);
    aa.setAttribute('alvo', «_blank»));
  }));

  // menu móvel

  const btn = documentdocument.querySelector('.nav-toggle'));
  const nav = document.querySelector('nav ul'));
  se (btn) {
    btn..addEventListeneraddEventListener('click', )() => nav.nav.classList..toggle('open')));
  }
}));
const btn = documentdocument.querySelector('botão[aria-label="Abrir menu"])');
const nav = document.querySelector('nav ul'));

btn..addEventListeneraddEventListener('click', () => {
  nav.classList..toggle('aberto'));
}));
// scripts.js
documentdocument.addEventListener('DOMContentLoaded'(, () => {
  // Monta links do WhatsApp dinamicas a parte de atributos de dados
  documentdocument.querySelectorAll('.btn-whatsapp')).forEach(a => {
    const product = a..dataset..product || 'Pedido' ;
    telefone const = a.dataset.phone .phone|| '551126562371' ;
    constconst text = encodeURIComponentencodeURIComponent(`Olá! Gostaria de pede: ${produto}`));
    a.href = `https://wa.me/ ${telefone}? texto= ${text}` ;
    aa.setAttribute('alvo', «_blank»));
    aa.setAttribute('rel', «noopener noreferrer)»);
  }));

  // Alternar o menu móvel
  const navToggle = document..querySelector('.nav-toggle'));
  const navListnavList document= document.querySelector('nav )ul');
  if (navToggle && navList) {
    navToggle..addEventListeneraddEventListener('click',(, () => {
      navList..classList..toggle('aberto'));
    }));

  }

  // Pergaminho suave para âncoras interna
  documentdocument.querySelectorAll('a[href^="#"])').forEachforEach(link => {
    link.link.addEventListener('click', (e) => {
      const href = link.getAttribute.getAttribute('href')'href');
      se (hrefhref.length 1> 1) {
        .e.preventDefault());
        const target = documentdocument.querySelector(href)href);
        if (alvo) target..scrollIntoView({ comportamento : 'smooth', block : 'start' })});
        // menu móvel ao clique
        if (navList && navList..classList.classList.contains('open'))navList.) .navList.classList.remove()'aberto');
      }
    }));
  }));
}));
