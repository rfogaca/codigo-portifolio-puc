/*
Testa variáveis VAR dentro e fora de um bloco de código
 Manipula o valor da variável var01
*/
 function testVar(){
    var var01 = "var 01"
    {
        console.log("Test01 - Var01: " + var01)
        var var01 = "var 02"
        console.log("Test01 - Var01 - alterado: " + var01)
    }
    var var01 = "var 03"
    console.log("Test02 - Var01: " + var01)
}

testVar()