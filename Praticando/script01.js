//Retorne no console todas as imagens do site
const imagensAll = document.querySelectorAll('img');
console.log(imagensAll);

//Retorne no console apenas as imagens que começarem que a palavra imagem
const imagens = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagens);

//Selecione todas os links internos onde o href começa com #
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

//Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);

//Selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
