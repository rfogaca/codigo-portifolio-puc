import {area, circunferencia as circ} from "./02-definicao-ES6.mjs";
console.log(`Área do círculo de raio 4 é ${area(7)}`);
console.log(`Circunferência do círculo de raio 4 é ${circ(7)}`);

import * as circulo from "./02-definicao-ES6.mjs";
console.log(`Área do círculo de raio 2 é ${circulo.area(3)}`);