const fs = require('fs')

fs.readFile(
    'arquivo-qualquer.txt',
    (err, buf) => {
        if (err) throw err
        else console.log(buf.toString())
    })