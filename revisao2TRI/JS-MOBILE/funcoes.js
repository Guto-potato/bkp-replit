/**
 * FUNÇÕES SÃO BLOCOS QUE PODEM SER REUTILIZADOS
 * FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
 * FUNÇÕES PODEM RETORNAR VALORES OU NÃO
 * FUNÇÕES PODEM SER ANÔNIMAS
 */
// DECLARAÇÃO DE FUNÇÃO
function dizeOla() {
  alert("Olá");
}
function olaPessoa(nome) {
  alert("Olá, " + nome);
}
const nome = " João";
const sobrenome = " Silva ";
const idade = 20;

function dadosPessoa(){
  const dados = nome + sobrenome + idade
  console.log(dados)
}
// INOVAÇÃO DE FUNÇÃO
dizeOla();
olaPessoa('yudi');
dadosPessoa()