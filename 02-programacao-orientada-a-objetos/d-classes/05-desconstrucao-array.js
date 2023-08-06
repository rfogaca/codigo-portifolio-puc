/*
A desestruturação é uma operação comum na linguagem e permite 'desempacotar' algo em vários 'pedaços'
No exemplo abaixo um nome composto de 3 partes é desempacotado em variáveis separadas
*/


let nomeCompleto = ['Rodrigo', "Strate", "Fogaça"];
var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log("O primeiro nome é: "+primeiroNome)
console.log("O nome do meio é: " +nomeDoMeio)
console.log("O último nome é: " +ultimoNome)

var [primeiroNome, ...restante] = nomeCompleto
console.log("O primeiro nome é: "+primeiroNome)
console.log("O restante do nome é: \"" +restante.toString().replace(',', ' ')+'"')

var [soOPrimeiroNome, ,soOUltimoNome] = nomeCompleto
console.log("O primeiro nome é: "+soOPrimeiroNome)
console.log("O último nome é: " +soOUltimoNome)