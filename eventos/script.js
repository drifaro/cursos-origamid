const img = document.querySelector('img');

// img.addEventListener('click', () => {
//   console.log('clicou');
// });
// function callback() {
//   console.log('clicou');
// };
// img.addEventListener('click', callback);




const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(){
//   console.log(event.currentTarget);
//   console.log(event.target);
// }
// animaisLista.addEventListener('click', callbackLista);

// animaisLista.addEventListener('click',() => {
//   console.log(event.currentTarget); //é exatamente o evento solicitado, que faz referência ao elemento 'animaisLista'
//   console.log(event.target);//é onde você clicou
//   console.log(event.type); //é o tipo de evento, retorna uma string
// });




const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
  event.preventDefault();
  console.log(this.getAttribute('href'));
  console.log(event.currentTarget);
};
linkExterno.addEventListener('click', handleLinkExterno);



const imgs = document.querySelectorAll('img');

function handleImg (event){
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
});