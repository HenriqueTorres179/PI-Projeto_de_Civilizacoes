const menuToggle = document.getElementById('menu-toggle');
const navCell = document.getElementById('nav-cell');
const lista = document.querySelector('.nav-cell ul');
function openNavCell() {
  lista.classList.add('display');
  navCell.classList.add('open');
  menuToggle.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNavCell() {
  navCell.classList.remove('open');
  menuToggle.classList.remove('open');
  document.body.style.overflow = '';
  navCell.addEventListener('transitionend', () => {
    if (!navCell.classList.contains('open')) {
      lista.classList.remove('display');
    }
  }, { once: true });
}
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navCell.classList.contains('open');
  if (isOpen) closeNavCell();
  else openNavCell();
});
document.addEventListener('click', (e) => {
  if (!navCell.classList.contains('open')) return;
  const target = e.target;
  if (navCell.contains(target)) return;
  if (menuToggle.contains(target)) return;
  if (target.closest && target.closest('a')) return;
  closeNavCell();
});
navCell.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNavCell));