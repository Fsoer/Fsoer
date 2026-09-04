/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("open");

        const isOpen = nav.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

    });


    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });

}


/* =========================================
   ANIMAÇÃO AO ROLAR
========================================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

}


/* =========================================
   FORMULÁRIO DE ORÇAMENTO
========================================= */

const budgetForm =
    document.querySelector("#orcamento-form");

if (budgetForm) {

    budgetForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome =
            document.querySelector("#nome").value.trim();

        const empresa =
            document.querySelector("#empresa").value.trim();

        const servico =
            document.querySelector("#servico").value;

        const descricao =
            document.querySelector("#descricao").value.trim();


        const telefone =
            "5527992629326";


        const mensagem =
`Olá, Fsoer.Dev!

Gostaria de solicitar um orçamento.

Nome: ${nome}

Empresa: ${empresa || "Não informado"}

Serviço desejado: ${servico}

Descrição do projeto:
${descricao}

Gostaria de conversar sobre o projeto e receber uma avaliação inicial.`;


        const url =
            `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;


        window.open(url, "_blank");

    });

}


/* =========================================
   ÁREA DO CLIENTE
========================================= */

const loginForm =
    document.querySelector("#login-form");

const loginMessage =
    document.querySelector("#login-message");

if (loginForm && loginMessage) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        loginMessage.textContent =
            "A Área do Cliente está em fase de implantação. O sistema de autenticação real será conectado posteriormente.";

    });

}