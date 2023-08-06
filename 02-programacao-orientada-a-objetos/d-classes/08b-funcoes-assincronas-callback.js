const fs = require('fs')

fs.readFile(
    'arquivo-qualquer.txt.txt',
    (err, buf) => {
        if (err)
            console.log("houve um erro")
        else
            console.log(buf.toString())
    })