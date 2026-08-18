<div align="center">
  <h1>🌐 Landing Page — Felipe Duarte</h1>
  <p><strong>Página web moderna, responsiva e performática desenvolvida para apresentação de portfólio e serviços profissionais.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>

  <p>
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias-utilizadas">Tecnologias</a> •
    <a href="#-estrutura-do-projeto">Estrutura</a> •
    <a href="#-como-executar">Como Executar</a> •
    <a href="#-autor">Autor</a>
  </p>
</div>

---

## 📌 Sobre o Projeto

Landing page desenvolvida com foco em **design limpo**, **navegação intuitiva** e **alta performance**. A arquitetura do front-end foi construída utilizando Vanilla JavaScript e CSS modularizado, garantindo fácil manutenção, carregamento ágil e total adaptabilidade a diferentes dispositivos (smartphones, tablets e desktops).

---

## ✨ Funcionalidades

- [x] **Design Responsivo:** Layout adaptável para dispositivos móveis, tablets e telas widescreen.
- [x] **Menu Hambúrguer Interativo:** Navegação móvel otimizada via JavaScript.
- [x] **Efeitos de Rolagem Dinâmicos:** Transições e animações ativadas conforme o scroll do usuário.
- [x] **Seção de Portfólio:** Galeria de projetos organizada e interativa.
- [x] **Tipografia Local Otimizada:** Fontes locais (`Poppins` em formatos `.woff`/`.woff2`) para máxima velocidade de renderização e independência de CDNs externas.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estruturação semântica e acessível da página |
| **CSS3 Modular** | Estilização dividida em escopos (`reset`, `global`, `style`, `responsividade`) |
| **JavaScript (Vanilla)** | Controle de eventos de UI (menu mobile, filtros e scroll) |
| **Poppins Font Family** | Tipografia institucional leve e moderna |
| **Git & GitHub** | Controle de versão e hospedagem de código |

---

## 📁 Estrutura do Projeto

```text
landingpage/
│
├── assets/
│   ├── css/
│   │   ├── global.css              # Variáveis de cor, tipografia e estilos globais
│   │   ├── reset.css               # Reset de CSS para normalização de navegadores
│   │   ├── responsividade.css      # Media queries e ajustes para telas mobile
│   │   └── style.css               # Estilização das seções e componentes
│   │
│   └── js/
│       ├── hamburger-bnt.js        # Lógica de abertura/fechamento do menu mobile
│       ├── main.js                 # Inicialização e scripts gerais da aplicação
│       ├── portifolio.js           # Lógica de exibição e interatividade dos projetos
│       └── scrolled.js             # Detecção de scroll e efeitos de navegação fixa
│
├── components/
│   └── fonts/                      # Fontes Poppins otimizadas (.woff, .woff2)
│
└── index.html                      # Estrutura principal da página
