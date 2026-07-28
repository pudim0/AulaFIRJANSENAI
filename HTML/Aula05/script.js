// Renderiza os ícones da biblioteca Lucide
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Data Dinâmica no Hero
const setDynamicDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const dateElement = document.getElementById("current_date");
  if (dateElement) {
    dateElement.innerHTML = `${day}/${month}/${year}`;
  }
};
setDynamicDate();

// Toggle do Menu Mobile
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('#nav-menu ul');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    // Alterna a classe 'active' que mostra/esconde o menu no CSS responsivo
    navMenu.classList.toggle('active');
    
    // Altera o ícone baseado no estado do menu
    const icon = navMenu.classList.contains('active') ? 'x' : 'menu';
    menuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
  });
}

const produtos = [
    {
        id: 1,
        nome: "Beck",
        descricao: "Beck clássico do dia a dia",
        preco: 9.99
    },
    {
        id: 2,
        nome: "Malbeck",
        descricao: "O beck cheiroso pra quem não quer ficar com cheiro depois de fumar",
        preco: 19.99
    },
    {
        id: 3,
        nome: "Beck de 1g",
        descricao: "Beckzinho de 1g pra quem quer economizar",
        preco: 1.99
    },
    {
        id: 4,
        nome: "Pó de 5",
        descricao: "Pra dar aquele raio curtinho",
        preco: 4.99
    },
    {
        id: 5,
        nome: "Pó de 10",
        descricao: "Pra dar aquele raio mais longo",
        preco: 9.99
    }
]

