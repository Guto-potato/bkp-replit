//IDENTIFICAR ELEMENTOS HTML

const menu = document.querySelector('.menu');
const vermelho = document.querySelector('#vermelho');
const verde = document.querySelector('#verde');
const azul = document.querySelector('#azul');
const amarelo = document.querySelector('#amarelo');
const box = document.querySelector('.box');
const texto = document.querySelector('#texto');
//manipular esses elementos

vermelho.addEventListener('click', function() {
  box.style.backgroundColor = "#d65151";
  texto.style.color = "#63313d";
})
verde.addEventListener('click', function() {
  box.style.backgroundColor = "#79c65d";
  texto.style.color = "#246025";
})
azul.addEventListener('click', function() {
  box.style.backgroundColor = "#63abca";
  texto.style.color = "#31447d";
})
amarelo.addEventListener('click', function() {
  box.style.backgroundColor = "#f0c14b";
  texto.style.color = "#754729";
})
cinza.addEventListener('click', function() {
  box.style.backgroundColor = "#d0d2dc";
  texto.style.color = "black";
})