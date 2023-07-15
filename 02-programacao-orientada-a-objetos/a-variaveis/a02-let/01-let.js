//Testa variáveis LET dentro e fora de um bloco de código
function testLet(){
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("Test01 - Let01: " + let01)
        console.log("Test01 - Let02: " + let02)
    }
    console.log("Test02 - Let01: " + let01)
}

testLet()