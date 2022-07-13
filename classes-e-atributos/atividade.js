// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu a');
menu.forEach((classAtivo) => {
  classAtivo.classList.add('ativo');
});
console.log(menu);



// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((classAtivo) => {
  classAtivo.classList.remove('ativo');
});

menu[0].classList.add('ativo');
console.log(menu);



// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');
img.forEach((imgAlt) => {
 const possuiAlt = imgAlt.hasAttribute('alt');
  console.log(img, possuiAlt);
});



// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href','https://www.google.com');
console.log(link);
