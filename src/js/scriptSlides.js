// ! Feito com IA !
document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.querySelector('.slides-img .slider input');
    const slides = document.querySelectorAll('.slides-img .slide');
    const spans = document.querySelectorAll('.slides-img .slider-text span');
    function atualizarSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) slide.classList.add('aberto');
            else slide.classList.remove('aberto');
        });

        spans.forEach((span, i) => {
            if (i === index) span.classList.add('current');
            else span.classList.remove('current');
        });
    }
    rangeInput.addEventListener('input', (e) => {
        const valor = parseInt(e.target.value);
        let index = 0;
        if (valor > 33 && valor <= 66) {
            index = 1;
        } else if (valor > 66) {
            index = 2;
        }
        atualizarSlide(index);
    });
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            let novoValor = 0;
            if (index === 0) novoValor = 16;
            if (index === 1) novoValor = 50;
            if (index === 2) novoValor = 84;
            rangeInput.value = novoValor;
            atualizarSlide(index);
        });
    });
});