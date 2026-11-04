// O Tailwind é só CSS, então tudo que é interação precisei fazer aqui.

// ===== 1. Menu fica menor e com sombra quando a página rola =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.replace("py-4", "py-2");
    navbar.classList.add("shadow-xl");
  } else {
    navbar.classList.replace("py-2", "py-4");
    navbar.classList.remove("shadow-xl");
  }
});

// ===== 2. Abrir e fechar o menu no celular =====
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");
const iconeMenu = botaoMenu.querySelector("i");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  // troca o ícone ☰ por X
  iconeMenu.classList.toggle("bi-list");
  iconeMenu.classList.toggle("bi-x-lg");
});

// fecha o menu quando clica em um link (só no celular)
document.querySelectorAll(".link-menu").forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 1024) {
      menu.classList.add("hidden");
      iconeMenu.classList.add("bi-list");
      iconeMenu.classList.remove("bi-x-lg");
    }
  });
});

// ===== 3. Abas do cardápio =====
const botoesAba = document.querySelectorAll(".aba-botao");
const conteudosAba = document.querySelectorAll(".aba-conteudo");

botoesAba.forEach(function (botao) {
  botao.addEventListener("click", function () {
    // esconde todas as abas e "desliga" todos os botões
    conteudosAba.forEach(function (conteudo) {
      conteudo.classList.add("hidden");
    });
    botoesAba.forEach(function (b) {
      b.classList.remove("bg-cafe", "text-white");
      b.classList.add("text-cafe");
    });

    // mostra só a aba clicada e "liga" o botão
    document.getElementById(botao.dataset.aba).classList.remove("hidden");
    botao.classList.add("bg-cafe", "text-white");
    botao.classList.remove("text-cafe");
  });
});

// ===== 4. Validação do formulário =====
// No Bootstrap isso já vem pronto. Aqui tive que mostrar cada erro na mão.
const formulario = document.getElementById("formulario");
const sucesso = document.getElementById("sucesso");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // não recarrega a página
  let tudoCerto = true;

  formulario.querySelectorAll(".campo").forEach(function (campo) {
    const erro = campo.nextElementSibling; // o <p> de erro logo abaixo do campo

    if (campo.checkValidity()) {
      campo.classList.remove("border-red-500");
      erro.classList.add("hidden");
    } else {
      campo.classList.add("border-red-500");
      erro.classList.remove("hidden");
      tudoCerto = false;
    }
  });

  if (tudoCerto) {
    sucesso.classList.remove("hidden");
    formulario.reset();
  } else {
    sucesso.classList.add("hidden");
  }
});

// ===== 5. Ano atual no rodapé =====
document.getElementById("ano").textContent = new Date().getFullYear();
