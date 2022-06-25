// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeDoParente = 26;
var minhaIdade = 26;

if (minhaIdade > idadeDoParente){
  console.log('É maior');
} else if (minhaIdade === idadeDoParente){
  console.log('É igual.')
} else {
  console.log('É menor.')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
valorRetornado = 3; //pois o && procura o último valor verdadeiro, mas se tiver um valor falso, ele retorna o falso.
retorno = valorRetornado === expressao
console.log(valorRetornado, expressao, retorno);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
  console.log('O número de habitantes do Brasil é MAIOR que o da China');
} else {
  console.log('O número de habitantes do Brasil é MENOR que o da China');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // Será false, pois o && procura o último valor verdadeiro, mas se tiver um valor falso antes, ele retorna o falso.

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}