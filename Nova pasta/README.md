# ☕ Café Código – Bootstrap x Tailwind CSS

Atividade da disciplina **1ESSPR-2026** – Engenharia de Software (2º semestre).

## 🎯 Objetivo da atividade

Desenvolver **o mesmo layout duas vezes**, uma com **Bootstrap** e outra com **Tailwind CSS**, mantendo os mesmos elementos e a mesma organização visual. A ideia é testar as duas tecnologias e comparar como foi desenvolver com cada uma.

O layout é a landing page de uma cafeteria fictícia para programadores, a **Café Código**. A página tem:

| Seção | O que tem |
|-------|-----------|
| **Menu** | Fixo no topo, diminui e ganha sombra ao rolar a página, vira botão ☰ no celular |
| **Banner (hero)** | Título, botões, números (+500 clientes, 30 mesas, nota 4.9) e um cartão "Café do dia" que se endireita ao passar o mouse |
| **Serviços** | 3 cards com ícone que sobem ao passar o mouse |
| **Cardápio** | Abas "Cafés" e "Lanches" com itens e preços |
| **Sobre** | Ilustração própria (SVG) + texto e lista com ícones |
| **Depoimentos** | 3 cards com estrelas e avatar com as iniciais |
| **Contato** | Informações (endereço, horário, telefone, e-mail) + formulário com validação |
| **Rodapé** | 3 colunas, redes sociais e ano atual gerado por JavaScript |

Paleta de cores usada nas duas versões: café `#2b1b12`, caramelo `#c8873a` e creme `#f7efe5`.
Fontes: **Playfair Display** (títulos) e **Poppins** (textos), do Google Fonts.

## 📁 Organização do repositório

| Branch      | Conteúdo |
|-------------|----------|
| `bootstrap` | Desenvolvimento da versão com Bootstrap |
| `tailwind`  | Desenvolvimento da versão com Tailwind CSS |
| `main`      | As duas versões finalizadas + este README |

```
/
├── bootstrap/
│   ├── index.html
│   ├── css/
│   │   └── style.css      → cores do café e classes próprias
│   ├── js/
│   │   └── script.js      → menu ao rolar, validação do formulário
│   └── img/
│       └── sobre.svg
├── tailwind/
│   ├── index.html         → tema (@theme) fica dentro do próprio HTML
│   ├── js/
│   │   └── script.js      → menu do celular, abas, validação
│   └── img/
│       └── sobre.svg
└── README.md
```

## 🛠️ Como cada versão foi construída

### Versão Bootstrap (`bootstrap/`)

- Bootstrap **5.3.3** e **Bootstrap Icons** carregados por **CDN**.
- Layout com o **grid do Bootstrap** (`container`, `row`, `col-lg-6`, `col-md-4`).
- **Componentes prontos** usados: `navbar` + `collapse` (menu do celular), `nav-pills` + `tab-content` (abas do cardápio), `card`, `badge`, `btn`, `form-control`, `form-select`, `alert` e validação com `was-validated` / `invalid-feedback`.
- Como o Bootstrap não tem as cores do café, criei **variáveis CSS** (`--cafe`, `--caramelo`, `--creme`) e classes próprias no `css/style.css`, como `.bg-cafe`, `.btn-caramelo`, `.card-servico` e `.py-6`.
- O `js/script.js` é pequeno, porque o menu e as abas já funcionam com o JavaScript do Bootstrap. Ele só cuida do efeito do menu ao rolar, da validação do formulário e do ano no rodapé.

### Versão Tailwind (`tailwind/`)

- Tailwind CSS **v4** pelo **Play CDN** (`@tailwindcss/browser@4`), sem instalar nada.
- As cores e fontes foram criadas com **`@theme`** dentro de uma tag `<style type="text/tailwindcss">`. Depois disso consigo usar classes como `bg-cafe`, `text-caramelo` e `font-titulo`.
- Layout com **classes utilitárias**: `grid lg:grid-cols-2`, `md:grid-cols-3`, `flex`, `gap-*`, `max-w-6xl mx-auto`.
- Efeitos feitos só com classes: `hover:-translate-y-2`, `rotate-3 hover:rotate-0 hover:scale-105`, `transition`.
- Valores que o Tailwind não tem foram feitos com **valores arbitrários**, por exemplo `bg-[radial-gradient(...)]` no banner e `w-[70px]` nos ícones.
- **Nenhum arquivo CSS** foi necessário.
- Como o Tailwind não tem JavaScript, o `js/script.js` é maior: faz o menu do celular abrir e fechar, a troca das abas do cardápio, a validação do formulário (mostrando cada erro) e o efeito do menu ao rolar.

## ▶️ Como executar

Os dois projetos são HTML, CSS e JavaScript puros e usam CDN, então **não precisa instalar nada**, só ter internet (para carregar o framework, os ícones e as fontes).

1. Clone o repositório:
   ```bash
   git clone <link-do-repositorio>
   cd <nome-do-repositorio>
   ```
2. Abra no navegador:
   - Versão Bootstrap: `bootstrap/index.html`
   - Versão Tailwind: `tailwind/index.html`

**Opcional (VS Code):** instale a extensão **Live Server**, clique com o botão direito no `index.html` e escolha **"Open with Live Server"**.

Para ver cada versão na sua branch de desenvolvimento:
```bash
git checkout bootstrap   # versão Bootstrap
git checkout tailwind    # versão Tailwind
git checkout main        # as duas juntas
```

## 📚 Tecnologias

- HTML5, CSS3 e JavaScript
- [Bootstrap 5](https://getbootstrap.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/)
