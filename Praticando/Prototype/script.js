// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const andre = new Pessoas('Andre', 'Silva', 28);
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList);
Object.getOwnPropertyNames(HTMLCollection);
Object.getOwnPropertyNames(Document);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

console.log(li.constructor.name);
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);
console.log(li.click.constructor.name);

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name);
