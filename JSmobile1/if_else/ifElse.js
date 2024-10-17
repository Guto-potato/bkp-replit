// alert('ok')
//  // IF / ELSE -> ETRUTURA CONDICIONAL PARA TOMADA DE DSIÇÃO
// const idade = 18;

// if (idade >= 18) {
//   console.log('maior de idade');
// }
// else if (idade < 18) {
//   console.log('menor de idade');
// }
// else {
//   console.log("idade invalida")
// }
// REATORAÇÃO -> REFAZER COM MELHORIAS
// IF, IF PARA IF / ELSE IF
// CASE SENSITIVE -> MAIUCULA DIEREM DE MINUCULAS
/**
 * PROMPT -> ENTRADA DE DADOS
 * ESCREVA UM CODIGO QUE PERMITE QUAL A COR PREFERIDA. SE FOR VERMELHO, "IMPRIMA" VERMELHO. SE FOR AZUL,"IMPRIMA" AZUL
 * SENÃO NÃO CONHEÇO ESA COR
 */

const COR = prompt("qual sua cor preferida?");
if (COR == "vermelho") {
  console.log("imprimindo vermelho");
}

else if (COR == "azul") {
  console.log("imprimindo azul");
}

else {
  console.log("não conheço essa cor");
}

console.log(COR.length) //COMRPIMENTO A STRING
