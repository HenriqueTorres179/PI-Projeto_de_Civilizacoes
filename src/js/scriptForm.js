// ! Feito com IA !
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const submitBtn = document.querySelector("form button");
    const postForm = document.getElementById("post-form");
    const nomeValidado = document.getElementById("nomeValidado");
    const qtdAcoes = document.getElementById("qtdAcoes");
    const listaAcoes = document.querySelector(".lista-acoes");
    const agradecimentoSpecial = document.getElementById("agradecimentoSpecial");
    function validarBotao() {
        const nomePreenchido = nomeInput.value.trim() !== "";
        const algumCheckbox = form.querySelectorAll("input[type='checkbox']:checked").length > 0;
        if (nomePreenchido && algumCheckbox) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("disabled");
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add("disabled");
        }
    }
    nomeInput.addEventListener("input", validarBotao);
    form.querySelectorAll("input[type='checkbox']").forEach(cb => {
        cb.addEventListener("change", validarBotao);
    });
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const checkboxes = form.querySelectorAll("input[type='checkbox']:checked");
        let compromissos = [];
        checkboxes.forEach(cb => compromissos.push(cb.nextElementSibling.textContent));
        nomeValidado.textContent = nomeInput.value.trim();
        if (compromissos.length === 1) {
            qtdAcoes.textContent = "1 ação sustentável";
        } else {
            qtdAcoes.textContent = compromissos.length + " ações sustentáveis";
        }
        listaAcoes.innerHTML = "";
        compromissos.forEach(acao => {
            const li = document.createElement("li");
            li.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p>${acao}</p>
            `;
            listaAcoes.appendChild(li);
        });
        if (emailInput.value.trim() !== "") {
            agradecimentoSpecial.textContent = emailInput.value.trim();
            agradecimentoSpecial.parentElement.style.display = "block";
        } else {
            agradecimentoSpecial.parentElement.style.display = "none";
        }
        form.style.display = "none";
        postForm.style.display = "block";
        postForm.classList.remove("animar"); 
        void postForm.offsetWidth;
        postForm.classList.add("animar");
        confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        scalar: 1.2 
        });
    });
});