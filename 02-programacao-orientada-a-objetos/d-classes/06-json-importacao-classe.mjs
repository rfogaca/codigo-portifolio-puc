//Convertendo a instancia de uma classe utilizando o JSON.stringfy

import {UmaClasse} from "./05-desconstrucao-objeto-definicao-classe.mjs"

let umObjetoDeClasse = new UmaClasse("um valor")
let json = JSON.stringify(umObjetoDeClasse);

console.log("JSON: " + json);