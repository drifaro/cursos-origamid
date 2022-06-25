//Tipos de Dados
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

        //todos são primitivos(são dados imutáveis), exceto os objetos.

//Verificar tipo de dado

var nome = 'Dri',
    idade = 26,
    gostaDeBeber = true;
    simbolo = Symbol();
console.log(typeof nome, typeof idade, typeof gostaDeBeber, typeof simbolo);
      //typeof retorna o tipo de dado.
var time = null;
console.log(typeof time);
     //type of null retorna object.

//String
var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';


//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
