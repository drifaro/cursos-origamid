// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anoCopa = ['1959', '1962', '1970','1994','2002'];
console.log(anoCopa);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anoCopa.forEach(function(vencedor){
  console.log(`O brasil ganhou a copa de ${vencedor}.`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
console.log(frutas);

for (var i=0; i < frutas.length; i++){
  console.log(frutas[i]);
  if (frutas[i] === 'Pera'){    
    break;
  }  
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
console.log(frutas);
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
console.log(frutas);
