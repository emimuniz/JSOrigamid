//Retorne a url da pagina atual utilizando o objeto window
console.log(window.location.href);

//Selecione o primeiro elemento da pagina que possua a classe ativo
console.log(document.getElementsByClassName('ativo')[0]);
console.log(document.querySelector('.ativo'));

//Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

//Retorne a largura da janela
console.log(window.innerWidth);
