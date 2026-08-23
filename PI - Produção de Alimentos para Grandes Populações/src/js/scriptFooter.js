// ! Feito Legitimamente 🥳 !
const usBtn = document.querySelectorAll('.us-btn');
const conteiner = document.querySelectorAll('.perfil');
const avatar = document.querySelectorAll('.avatar');
usBtn.forEach(link => {
    link.addEventListener('click', () => {
        conteiner.forEach(moldura => moldura.classList.remove('sombra'));
        avatar.forEach(foto => foto.classList.remove('zoom'));
        let alvo = link.getAttribute('data-alvo');
        let conteinerAlvo = document.getElementById(alvo);
        if (conteinerAlvo) {
            let fotoAlvo = conteinerAlvo.querySelector('.avatar');
            conteinerAlvo.classList.add('sombra');
            if (fotoAlvo) {
                fotoAlvo.classList.add('zoom');
            }
        }
    });
});
document.addEventListener('click', e => {
    if (!e.target.classList.contains('us-btn')) {
        conteiner.forEach(moldura => moldura.classList.remove('sombra'));
        avatar.forEach(foto => foto.classList.remove('zoom'));
    }
});