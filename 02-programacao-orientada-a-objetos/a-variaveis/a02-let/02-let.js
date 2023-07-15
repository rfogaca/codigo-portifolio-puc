/*
Testa variáveis VAR dentro e fora de um bloco de código
Neste exemplo a variável 'let02' não está definida fora do bloco, ocasionando um erro
*/
function testLet(){
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("Test01 - Let01: " + let01)
        console.log("Test01 - Let02: " + let02)
    }
    console.log("Test02 - Let01: " + let01)
    console.log("Test02 - Let01: " + let02)
}

testLet()