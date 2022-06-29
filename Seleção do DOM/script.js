const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);


//querySelector -  retorna o primeiro elemento que combinar com o seu seletor CSS.
const primeiroUl = document.querySelector('ul');
console.log(primeiroUl);
const navItem = primeiroUl.querySelector('li');
console.log(navItem);

const linkInterno = document.querySelector('[href^="#"');
console.log(linkInterno);

//querySelectorAll - retorna uma array, retorna todos os elementos compatíveis com o seu seletor CSS.

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// primeiroUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

//Array-Like -> HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas no NodeList.
gridSectionNode.forEach(function(item, index){
  console.log(item);
});