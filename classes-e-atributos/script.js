const menu = document.querySelector('.menu');
console.log(menu.classList);

menu.classList.add('ativo', 'teste');
console.log(menu.classList);


menu.classList.remove('azul');
if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('não-possui-azul');  
}
console.log(menu.classList);  
menu.classList.remove('não-possui-azul');

console.log(menu.classList);  

menu.classList.toggle('azul');
if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('não-possui-azul');  
}
console.log(menu.classList);  