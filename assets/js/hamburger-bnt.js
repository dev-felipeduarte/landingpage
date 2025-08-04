// Seleciona o botão e o menu no documento HTML
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menuDireita = document.querySelector('.cabecalho-direita');

// Adiciona um "ouvinte" de evento de clique ao botão
hamburgerBtn.addEventListener('click', () => {
    // A cada clique, ele adiciona ou remove a classe 'active' dos dois elementos
    hamburgerBtn.classList.toggle('active');
    menuDireita.classList.toggle('active');
});