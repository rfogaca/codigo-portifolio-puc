//Importando a definição do CommonJS
const circulo = require('./01-definicao-CommonJS.js');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);

//Desestruturando o objeto e acessando a função diretamente
const {area} = require('./01-definicao-CommonJS.js');
console.log(`Área do círculo de raio 2 é ${area(2)}`);