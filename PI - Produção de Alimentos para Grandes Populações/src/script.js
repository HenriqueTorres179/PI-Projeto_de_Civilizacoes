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
  delay: 300
});

ScrollReveal().reveal('.text-reveal', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 400
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
  delay: 150
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

ScrollReveal().reveal('.videos-educacionais', {
  ...configBase,
  origin: 'left',
  scale: 0.95,
  delay: 200
});

ScrollReveal().reveal('.videos-carrossel', {
  ...configBase,
  origin: 'right',
  scale: 0.95,
  delay: 500
});

// Carrossel de Vídeos

let track = document.getElementById('track');
let nextBtn = document.getElementById('next-btn');
let slides = document.querySelectorAll('.carrossel-item');
let index = 0;
function updateCarousel() {
  const width = document.querySelector('.carrossel-slide').clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
  let nativeVideos = track.getElementsByTagName('video');
  for (let video of nativeVideos) {
    video.pause();
  }
}
nextBtn.addEventListener('click', () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  updateCarousel();
});
window.addEventListener('resize', updateCarousel);