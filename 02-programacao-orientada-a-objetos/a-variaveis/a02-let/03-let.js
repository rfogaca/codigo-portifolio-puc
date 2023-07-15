/*
Testa variáveis VAR dentro e fora de um bloco de código
Neste exemplo a variável 'let01' causará um conflito, pois existem duas declarações da mesma
*/
function testLet(){
    let let01 = "let 01"
    {
        console.log("Test01 - Let01: " + let01)
        let let01 = "let 02"
        console.log("Test02 - Let02: " + let01)
    }
    console.log("Test03 - Let01: " + let01)
}

testLet()