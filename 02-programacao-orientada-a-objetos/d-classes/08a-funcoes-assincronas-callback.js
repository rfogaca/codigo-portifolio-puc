//Funções assíncronas não espera a afunção chamada terminar a sua execução para o código seguir em frente

const fs = require('fs')

const onRead = function onRead(err, buf) {
    if (err)
        console.log("houve um erro")
    else
        console.log(buf.toString())
}

fs.readFile('arquivo-qualquer.txt', onRead)