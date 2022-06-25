// 1º Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado;
}
console.log(isTruthy(23));


// 2º Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(l) {
  return (l*4);
}
console.log(perimetro(3));


//3º Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Drislaine", "Andrade de Faro"));


//4º Crie uma função que verifica se um número é par
function verificacao(numero) {
  if (numero%2 === 0) {
    return "É par.";
  } else {
    return "É ímpar.";
  }
}
console.log(verificacao(2));


//5º Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dado(nome) {
  return typeof nome;
}
console.log(dado("Drislaine"));


//6º addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener ('scroll', function(){
  console.log("Drislaine Andrade de Faro");
});


//7º Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));


