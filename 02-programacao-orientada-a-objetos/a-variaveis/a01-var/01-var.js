//Testa variáveis VAR dentro e fora de um bloco de código
function testVar(){
    var var01 = "var 01"
    {
        var02 = "var 02"
        console.log("Test01 - Var01: " + var01)
        console.log("Test01 - Var02: " + var02)
    }
    console.log("Test02 - Var01: " + var01)
    console.log("Test02 - Var02: " + var02)
}

testVar()