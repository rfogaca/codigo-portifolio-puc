import {Carro} from "./03-definicao-carro.mjs"
var carro = new Carro(55)

console.log("Capacidade do tanque: " + carro.capacidade)
console.log("Tanque: " + carro.tanque)

carro.tanque = 10
console.log("Tanque: " + carro.tanque)

carro.tanque = 20
console.log("Tanque: " + carro.tanque)

carro.tanque = 40
console.log("Tanque: " + carro.tanque)