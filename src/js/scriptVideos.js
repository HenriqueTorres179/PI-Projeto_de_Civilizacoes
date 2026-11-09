const track = document.getElementById('track');
const nextBtn = document.getElementById('next-btn');
const slides = document.querySelectorAll('.carrossel-item');
let index = 0;
function updateCarousel() {
  const width = document.querySelector('.carrossel-slide').clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
  let videos = track.querySelector('video');
  for (let video of videos) {
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