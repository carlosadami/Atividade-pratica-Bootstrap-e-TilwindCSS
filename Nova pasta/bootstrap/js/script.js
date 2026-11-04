// ===== 1. Menu fica menor e com sombra quando a página rola =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("rolou");
  } else {
    navbar.classList.remove("rolou");
  }
});

// ===== 2. Fecha o menu do celular quando clica em um link =====
const links = document.querySelectorAll("#menu .nav-link, #menu .btn");
const menu = document.getElementById("menu");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getInstance(menu).hide();
    }
  });
});

// ===== 3. Validação do formulário =====
// O Bootstrap já tem o visual (classe was-validated mostra os erros em vermelho),
// eu só preciso verificar se o formulário está válido.
const formulario = document.getElementById("formulario");
const sucesso = document.getElementById("sucesso");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // não recarrega a página

  if (formulario.checkValidity()) {
    sucesso.classList.remove("d-none");
    formulario.reset();
    formulario.classList.remove("was-validated");
  } else {
    sucesso.classList.add("d-none");
    formulario.classList.add("was-validated");
  }
});

// ===== 4. Ano atual no rodapé =====
document.getElementById("ano").textContent = new Date().getFullYear();
