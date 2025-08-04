document.addEventListener('DOMContentLoaded', () => {
    // Para a imagem de fundo da div #imagem-fundo
    const imagemFundoDiv = document.getElementById('imagem-fundo');
    // Adiciona a classe inicial para a imagem de fundo
    imagemFundoDiv.classList.add('bg-inicial'); 
    
    // Para o cabeçalho
    const topo = document.getElementById('topo');
    // Ponto de troca para o cabeçalho e os ícones
    const pontoDeTrocaHeader = 50; // Ajuste este valor conforme a necessidade

    // Para os ícones das redes sociais
    const iconInstagram = document.getElementById('icon-instagram');
    const iconGithub = document.getElementById('icon-github');
    const iconLinkedin = document.getElementById('icon-linkedin');

    // Caminhos para as imagens dos ícones
    // Certifique-se de que essas imagens existam no seu diretório 'img/'
    const instagramBranco = 'img/icons/instagram-branco.svg';
    const instagramPreto = 'img/icons/instagram-preto.svg'; // Você precisará criar este arquivo

    const githubBranco = 'img/icons/github-branco.svg';
    const githubPreto = 'img/icons/github-preto.svg';     // Você precisará criar este arquivo

    const linkedinBranco = 'img/icons/linkedin-branco.svg';
    const linkedinPreto = 'img/icons/linkedin-preto.svg'; // Você precisará criar este arquivo

    // Ponto de troca para a imagem de fundo (provavelmente diferente do cabeçalho)
    const pontoDeTrocaFundo = 500; // Mantenha este valor ou ajuste conforme sua preferência para a imagem de fundo

    window.addEventListener('scroll', () => {
        // Lógica para o cabeçalho e ícones
        if (window.scrollY > pontoDeTrocaHeader) {
            // Se rolou, adiciona a classe 'scrolled' ao cabeçalho
            if (!topo.classList.contains('scrolled')) {
                topo.classList.add('scrolled');
                // Troca os ícones para a versão preta
                iconInstagram.src = instagramPreto;
                iconGithub.src = githubPreto;
                iconLinkedin.src = linkedinPreto;
            }
        } else {
            // Se voltou ao topo, remove a classe 'scrolled' do cabeçalho
            if (topo.classList.contains('scrolled')) {
                topo.classList.remove('scrolled');
                // Volta os ícones para a versão branca
                iconInstagram.src = instagramBranco;
                iconGithub.src = githubBranco;
                iconLinkedin.src = linkedinBranco;
            }
        }

        // Lógica para a imagem de fundo (mantida separada, pois o ponto de troca pode ser diferente)
        if (window.scrollY > pontoDeTrocaFundo) {
            if (!imagemFundoDiv.classList.contains('bg-rolado')) {
                imagemFundoDiv.classList.remove('bg-inicial');
                imagemFundoDiv.classList.add('bg-rolado');
            }
        } else {
            if (!imagemFundoDiv.classList.contains('bg-inicial')) {
                imagemFundoDiv.classList.remove('bg-rolado');
                imagemFundoDiv.classList.add('bg-inicial');
            }
        }
    });
});