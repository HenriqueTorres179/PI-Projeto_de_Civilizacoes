// Scroll Reveal
const configBase = {
  duration: 500,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  distance: '50px',
  opacity: 0
};

ScrollReveal().reveal('.nav > a', {
  ...configBase,
  origin: 'top',
  distance: '20px',
  delay: 100
});

ScrollReveal().reveal('.links li', {
  ...configBase,
  origin: 'top',
  interval: 50,
  distance: '15px',
  delay: 300
});

ScrollReveal().reveal('.hero-text .revelar-baixo', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  interval: 220,
  delay: 400
});

ScrollReveal().reveal('.hero-text .btn-reveal', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 900
});

ScrollReveal().reveal('.dsf-global-cabecalho', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 150
});

ScrollReveal().reveal('.cards .card-reveal', {
  ...configBase,
  origin: 'bottom',
  scale: 0.9,  
  interval: 200, 
  delay: 200,
  afterReveal: function (el) {
    const elementoContador = el.querySelector('.contador');
    if (!elementoContador) return;
    let valorAlvo = parseFloat(elementoContador.getAttribute('data-alvo'));
    const duracaoContagem = 1000;
    const tempoInicio = performance.now();
    const temDecimal = valorAlvo % 1 !== 0;
    function atualizarNumero(tempoAtual) {
      let progresso = Math.min((tempoAtual - tempoInicio) / duracaoContagem, 1);
      let valorAtual = progresso * valorAlvo;
      if (temDecimal) {
        elementoContador.innerText = valorAtual.toFixed(1).replace('.', ',');
      } else {
        elementoContador.innerText = Math.floor(valorAtual);
      }
      if (progresso < 1) {
        requestAnimationFrame(atualizarNumero);
      }
    }
    requestAnimationFrame(atualizarNumero);
  }
});

ScrollReveal().reveal('.img-reveal', {
  ...configBase,
  origin: 'right',
  scale: 0.95,
  delay: 250
});

ScrollReveal().reveal('.text-reveal .prod-stvl-text-header', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 300
});

ScrollReveal().reveal('.text-reveal h2', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 400
});

ScrollReveal().reveal('.text-reveal p', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  interval: 50,
  delay: 450
});

ScrollReveal().reveal('.text-reveal a', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 450
});

ScrollReveal().reveal('.banner-text .revelar-baixo', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  interval: 220,
  delay: 400
});

ScrollReveal().reveal('.tec-revo-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 990
});

ScrollReveal().reveal('.tec-revo-cards .tec-revo-card-reveal', {
  ...configBase,
  origin: 'bottom',
  scale: 0.9,
  easing: 'cubic-bezier(0.5, 1.8, 0.3, 0.8)',
  interval: 150, 
  delay: 100
});

ScrollReveal().reveal('.evo-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.left-time', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  easing: 'cubic-bezier(0.5, 1.8, 0.3, 0.8)', 
  delay: 200
});

ScrollReveal().reveal('.right-time', {
  ...configBase,
  duration: 700,
  origin: 'right',
  scale: 0.95,
  easing: 'cubic-bezier(0.5, 1.8, 0.3, 0.8)', 
  delay: 300
});

ScrollReveal().reveal('.videos-educacionais h2', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.videos-educacionais p', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 250
});

ScrollReveal().reveal('.videos-educacionais .revelar-links', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  interval: 100,
  delay: 300
});

ScrollReveal().reveal('.videos-carrossel', {
  ...configBase,
  origin: 'right',
  scale: 0.95,
  delay: 500
});

ScrollReveal().reveal('.dsf-text .revelar-baixo', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  interval: 220,
  delay: 400
});

ScrollReveal().reveal('.prin-obs-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 1040
});

ScrollReveal().reveal('.prin-obs-cards .prin-obs-card', {
  ...configBase,
  duration: 400,
  origin: 'bottom',
  scale: 0.95,
  interval: 150, 
  delay: 200
});

ScrollReveal().reveal('.dados-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.bar-chart', {
  ...configBase,
  origin: 'left',
  easing: 'cubic-bezier(0.5, 1.8, 0.3, 0.8)',
  scale: 0.95,
  delay: 400
});

ScrollReveal().reveal('.pie-chart', {
  ...configBase,
  origin: 'right',
  easing: 'cubic-bezier(0.5, 1.8, 0.3, 0.8)',
  scale: 0.95,
  delay: 400
});

ScrollReveal().reveal('.reg-vul-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.map', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.revelar-fome', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 300
});

ScrollReveal().reveal('.reg-vul-regs > *', {
  ...configBase,
  origin: 'right',
  easing: 'cubic-bezier(0.5, 1.8, 0.3, 0.8)',
  scale: 0.95,
  interval: 100,
  delay: 200,
  afterReveal: function (el) {
    el.classList.add('animated-btn');
  }
});

ScrollReveal().reveal('.urg-content', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.slcs-content .revelar-baixo', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  interval: 220,
  delay: 400
});

ScrollReveal().reveal('.alt-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 1040
});

ScrollReveal().reveal('.slcs-img', {
  ...configBase,
  origin: 'bottom',
  scale: 0.9,
  delay: 150
});

ScrollReveal().reveal('.slcs-text > *, .slcs-text ul .list-reveal', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  interval: 100,
  delay: 150
});

ScrollReveal().reveal('.prob-sol-text', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.prob-sol-content ul li', {
  ...configBase,
  duration: 300,
  distance: 0,
  scale: 0.2,
  interval: 150,
  delay: 300
});

ScrollReveal().reveal('.eco-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.eco-content ul .sequencia-reveal', {
  ...configBase,
  origin: 'bottom',
  easing: 'cubic-bezier(0.5, 1.8, 0.3, 0.8)',
  scale: 0.9,
  interval: 150,
  delay: 200
});

ScrollReveal().reveal('.eco-content .eco-btn-reveal', {
  ...configBase,
  origin: 'bottom',
  scale: 0.9,
  delay: 300
});

ScrollReveal().reveal('.cur-quiz-text .revelar-baixo', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  interval: 150,
  delay: 200
});

ScrollReveal().reveal('.cur-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 800
});

ScrollReveal().reveal('.cur-content ul .curs', {
  ...configBase,
  duration: 400,
  distance: 0,
  scale: 0.4,
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.quiz-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.carrossel-quiz', {
  ...configBase,
  origin: 'bottom',
  scale: 0.9,
  delay: 200
});

ScrollReveal().reveal('.cncls-text .revelar-baixo', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  interval: 150,
  delay: 200
});

ScrollReveal().reveal('.resp-text:nth-child(1), .resp-text h2', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 600
});

ScrollReveal().reveal('.resp-text p', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.resp-message', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.compr-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.9,
  delay: 200
});

ScrollReveal().reveal('.compr-content form', {
  ...configBase,
  duration: 400,
  distance: 0,
  scale: 0.4,
  delay: 300
});

ScrollReveal().reveal('.compr-content form ul li', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  interval: 100,
  delay: 400
});

ScrollReveal().reveal('.form-info > div', {
  ...configBase,
  origin: 'top',
  scale: 0.95,
  interval: 100,
  delay: 200
});

ScrollReveal().reveal('.compr-content form .btn-reveal', {
  ...configBase,
  origin: 'top',
  scale: 0.95,
  delay: 300
});

ScrollReveal().reveal('.futuro-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.futuro-content ul li', {
  ...configBase,
  origin: 'bottom',
  scale: 0.9,  
  interval: 200, 
  delay: 200,
  afterReveal: function (el) {
    const elementoContador = el.querySelector('.contador');
    if (!elementoContador) return;
    let valorAlvo = parseFloat(elementoContador.getAttribute('data-alvo'));
    const duracaoContagem = 1000;
    const tempoInicio = performance.now();
    const temDecimal = valorAlvo % 1 !== 0;
    function atualizarNumero(tempoAtual) {
      let progresso = Math.min((tempoAtual - tempoInicio) / duracaoContagem, 1);
      let valorAtual = progresso * valorAlvo;
      if (temDecimal) {
        elementoContador.innerText = valorAtual.toFixed(1).replace('.', ',');
      } else {
        elementoContador.innerText = Math.floor(valorAtual);
      }
      if (progresso < 1) {
        requestAnimationFrame(atualizarNumero);
      }
    }
    requestAnimationFrame(atualizarNumero);
  }
});

ScrollReveal().reveal('.about-text', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.about-us li', {
  ...configBase,
  origin: 'bottom',
  scale: 0.95,
  interval: 150,
  delay: 200
});