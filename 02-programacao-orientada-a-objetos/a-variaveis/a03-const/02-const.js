//Testa a mudança da propriedade de um objeto armazenado em uma constante
function testConst(){
    const const01 = {propriedade: "valor"}
    console.log("Test01 - Const01: " + const01.propriedade)

    const01.propriedade = "novo valor"
    console.log("Test022 - Const01: " + const01.propriedade)
}

testConst()