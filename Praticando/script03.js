// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  item.classList.remove('ativo');
});

menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach((item) => {
  console.log(item.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
const ultimoLink = document.querySelector('a[href^="http"]');
ultimoLink.setAttribute('href', 'https://www.superflix.net/');
