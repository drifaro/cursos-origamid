// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
var resultado = 35;
console.log(total == resultado);
console.log(total, resultado);

// Crie duas expressões que retornem NaN
var exemplo1 = "Idade 26";
var soma = exemplo1 * 5;
console.log(soma);

var exemplo2 = '66kg'/1.61;
console.log(exemplo2);

// Somar a string '200' com o número 50 e retornar 250
var var1 = +'200'+50;
console.log(var1);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x);

// Como dividir o peso por 2?
var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois);
