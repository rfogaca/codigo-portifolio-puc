/*
Testa variáveis VAR dentro e fora de um IF que nunca será verdadeiro
Os 'Test 01' não são executados e a variável 'var02' não tem definição na exibição do 'Test02'
*/
function testVar(){
    var var01 = "var 01"
    if(1==0)
    {
        var var02 = "var 02";
        console.log("Test01 - Var01: " + var01)
        console.log("Test01 - Var02: " + var02)
    }

    console.log("Test02 - Var01: " + var01)
    console.log("Test02 - Var02: " + var02)
}

testVar()