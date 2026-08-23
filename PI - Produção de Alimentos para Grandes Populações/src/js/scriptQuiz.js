// ! Feito com IA !
document.addEventListener('DOMContentLoaded', () => {
  const fallbackAnswers = [1,3,2,1,2,1,2,2];
  const track = document.querySelector('.quiz-track');
  const slides = Array.from(track.querySelectorAll('.carrossel-item'));
  if (!track || slides.length === 0) return console.warn('Track ou slides não encontrados');
  const finalIndex = slides.findIndex(s => s.classList.contains('final'));
  const questionSlides = slides.filter(s => !s.classList.contains('final'));
  const totalQuestions = questionSlides.length;
  let current = slides.findIndex(s => !s.classList.contains('final'));
  if (current < 0) current = 0;
  let score = 0;
  let answered = false;
  function setTrackHeightToSlide(slide, instant = false) {
    if (!slide) return;
    const h = Math.ceil(slide.getBoundingClientRect().height);
    if (instant) {
      track.style.transition = 'none';
      track.style.height = `${h}px`;
      void track.offsetHeight;
      track.style.transition = '';
    } else {
      track.style.height = `${h}px`;
    }
  }
  function getProgressPercentForOrdinal(ordinal) {
    return (ordinal / totalQuestions) * 100;
  }
  function showExplanation(slide, text) {
    const expl = slide.querySelector('.explanation');
    const explText = slide.querySelector('.explanation-text');
    if (!expl || !explText) return;
    explText.textContent = text || '';
    expl.hidden = false;
    requestAnimationFrame(() => expl.classList.add('visible'));
  }
  function hideExplanation(slide) {
    const expl = slide.querySelector('.explanation');
    if (!expl) return;
    expl.classList.remove('visible');
    expl.hidden = true;
  }
  function init() {
  slides.forEach((s, i) => {
    s.classList.remove('active','enter-right','exit-left');
    const headerH4 = s.querySelector('.question-header h4');
    const scoreEl = s.querySelector('.score-value');
    if (headerH4 && !s.classList.contains('final')) {
      const ordinal = slides.slice(0, i+1).filter(x => !x.classList.contains('final')).length;
      headerH4.textContent = `Pergunta ${ordinal} de ${totalQuestions}`;
    }
    if (scoreEl) scoreEl.textContent = score;
    const progress = s.querySelector('.progress');
    if (progress) progress.style.width = (i === current ? `${getProgressPercentForOrdinal(1)}%` : '0%');
    const localNext = s.querySelector('.prox-btn');
    if (localNext) localNext.classList.add('hidden'); // oculto até responder
    const expl = s.querySelector('.explanation');
    if (expl) { expl.hidden = true; expl.classList.remove('visible'); }
  });
  slides[current].classList.add('active');
  setTrackHeightToSlide(slides[current], true);
  slides.forEach((slide, idx) => {
    const buttons = Array.from(slide.querySelectorAll('.alt-btn'));
    buttons.forEach(btn => btn.addEventListener('click', (e) => onSelectAlternative(e, slide, idx)));
    const localNext = slide.querySelector('.prox-btn');
    if (localNext) localNext.addEventListener('click', () => goToNextSlide());
  });
  const restartBtn = document.querySelector('.restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', resetQuiz);
  }
}
  function resetQuiz() {
    slides.forEach(s => {
      s.classList.remove('active','enter-right','exit-left');
      const allBtns = Array.from(s.querySelectorAll('.alt-btn'));
      allBtns.forEach(b => {
        b.classList.remove('alt-btn-disabled','alt-btn-correct','alt-btn-wrong');
        b.disabled = false;
        b.removeAttribute('aria-disabled');
        b.tabIndex = 0;
        const sC = b.querySelector('svg.certo');
        const sE = b.querySelector('svg.errado');
        if (sC) sC.classList.remove('visible');
        if (sE) sE.classList.remove('visible');
      });
      const expl = s.querySelector('.explanation');
      if (expl) { expl.hidden = true; expl.classList.remove('visible'); }
      const localNext = s.querySelector('.prox-btn');
      if (localNext) localNext.classList.add('hidden');
      const progress = s.querySelector('.progress');
      if (progress) progress.style.width = '0%';
    });
    current = slides.findIndex(s => !s.classList.contains('final'));
    if (current < 0) current = 0;
    score = 0;
    answered = false;
    slides[current].classList.add('active');
    setTrackHeightToSlide(slides[current], true);
    slides.forEach((s, i) => {
      const scoreEl = s.querySelector('.score-value');
      if (scoreEl) scoreEl.textContent = score;
    });
  }
  function onSelectAlternative(e, slide, slideIndex) {
  if (answered) return;
  answered = true;
  const btn = e.currentTarget;
  const chosen = Number(btn.getAttribute('data-index'));
  let isChosenCorrect = false;
  if (btn.hasAttribute('data-correct')) {
    const v = btn.getAttribute('data-correct');
    isChosenCorrect = (v === '1' || v === 'true');
  }
  let correctIndex = null;
  const correctBtn = slide.querySelector('.alt-btn[data-correct]');
  if (correctBtn) {
    correctIndex = Number(correctBtn.getAttribute('data-index'));
    if (!btn.hasAttribute('data-correct')) isChosenCorrect = (chosen === correctIndex);
  } else {
    const questionOrdinalIndex = slides.slice(0, slideIndex+1).filter(s => !s.classList.contains('final')).length - 1;
    correctIndex = fallbackAnswers[questionOrdinalIndex] ?? 0;
    if (!btn.hasAttribute('data-correct')) isChosenCorrect = (chosen === correctIndex);
  }
  const allBtns = Array.from(slide.querySelectorAll('.alt-btn'));
  allBtns.forEach(b => {
    b.classList.add('alt-btn-disabled');
    b.disabled = true;
    b.setAttribute('aria-disabled','true');
    b.tabIndex = -1;
    const sC = b.querySelector('svg.certo');
    const sE = b.querySelector('svg.errado');
    if (sC) sC.classList.remove('visible');
    if (sE) sE.classList.remove('visible');
  });
  if (isChosenCorrect) {
    btn.classList.remove('alt-btn-disabled');
    btn.classList.add('alt-btn-correct');
    const svgC = btn.querySelector('svg.certo');
    if (svgC) svgC.classList.add('visible');
    score++;
  } else {
    btn.classList.remove('alt-btn-disabled');
    btn.classList.add('alt-btn-wrong');
    const svgE = btn.querySelector('svg.errado');
    if (svgE) svgE.classList.add('visible');

    if (correctIndex !== null) {
      const revealBtn = slide.querySelector(`.alt-btn[data-index="${correctIndex}"]`);
      if (revealBtn) {
        revealBtn.classList.remove('alt-btn-disabled');
        revealBtn.classList.add('alt-btn-correct');
        const svgC = revealBtn.querySelector('svg.certo');
        if (svgC) svgC.classList.add('visible');
      }
    } else if (correctBtn) {
      correctBtn.classList.remove('alt-btn-disabled');
      correctBtn.classList.add('alt-btn-correct');
      const svgC = correctBtn.querySelector('svg.certo');
      if (svgC) svgC.classList.add('visible');
    }
  }
  slides.forEach(s => {
    const scoreEl = s.querySelector('.score-value');
    if (scoreEl) scoreEl.textContent = score;
  });
  const explanationText = slide.querySelector('.explanation-text')?.textContent || '';
  showExplanation(slide, explanationText);
  const localNext = slide.querySelector('.prox-btn');
  if (localNext) localNext.classList.remove('hidden');
}
  function goToNextSlide() {
  const prev = slides[current];
  const nextIndex = current + 1;
  if (nextIndex >= slides.length) return;
  const next = slides[nextIndex];
  const prevProgressEl = prev.querySelector('.progress');
  const prevPercent = prevProgressEl ? parseFloat(prevProgressEl.style.width) || getProgressPercentForOrdinal(slides.slice(0, current+1).filter(s => !s.classList.contains('final')).length) : 0;
  const nextProgressEl = next.querySelector('.progress');
  const questionOrdinalForNext = slides.slice(0, nextIndex+1).filter(s => !s.classList.contains('final')).length;
  const targetPercentForNext = getProgressPercentForOrdinal(questionOrdinalForNext);
  if (nextProgressEl) {
    nextProgressEl.style.transition = 'none';
    nextProgressEl.style.width = `${prevPercent}%`;
    void nextProgressEl.offsetHeight;
    nextProgressEl.style.transition = 'width 900ms cubic-bezier(.2,.9,.2,1)';
  }
  prev.classList.add('exit-left');
  next.classList.add('enter-right');
  setTrackHeightToSlide(next, false);
  const onPrevEnd = (ev) => {
    if (ev.target !== prev) return;
    prev.classList.remove('active','exit-left');
    prev.removeEventListener('transitionend', onPrevEnd);
    next.classList.add('active');
    setTimeout(() => {
      requestAnimationFrame(() => next.classList.remove('enter-right'));
    }, 120);
    const onNextEnd = (ev2) => {
      if (ev2.target !== next) return;
      setTimeout(() => {
        if (nextProgressEl) {
          nextProgressEl.style.width = `${targetPercentForNext}%`;
        }
      }, 180);
      if (next.classList.contains('final')) {
        const finalScoreEl = next.querySelector('.final-score');
        const finalMsgEl = next.querySelector('.final-message');
        if (finalScoreEl) finalScoreEl.textContent = `${score}/${totalQuestions}`;
        if (finalMsgEl) {
          let message = '';
          if (score <= 2) message = "Continue estudando! Há muito a aprender sobre segurança alimentar!";
          else if (score <= 5) message = "Bom esforço! Você já entende alguns pontos importantes, mas ainda há espaço para melhorar.";
          else if (score <= 7) message = "Ótimo desempenho! Você tem um bom domínio sobre o tema.";
          else message = "Excelente! Você acertou todas as questões e domina o assunto!";
          finalMsgEl.textContent = message;
        }
      }
      next.removeEventListener('transitionend', onNextEnd);
    };
    next.addEventListener('transitionend', onNextEnd);
    current = nextIndex;
    answered = false;
    const localNext = next.querySelector('.prox-btn');
    if (localNext) localNext.classList.add('hidden');
  };
  prev.addEventListener('transitionend', onPrevEnd);
}
  init();
});