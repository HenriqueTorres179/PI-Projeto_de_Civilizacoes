// Carrossel de Vídeos ! Feito com IA !
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