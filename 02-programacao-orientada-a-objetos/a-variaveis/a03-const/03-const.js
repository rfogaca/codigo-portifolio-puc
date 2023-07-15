/*
Testa a redefinição um objeto armazenado em uma constante
Ocorre erro pois constantes não permitem a redefinição de objetos
*/
function testConst(){
    const const01 = {propriedade: "valor"}
    console.log("Test01 - Const01: " + const01.propriedade)

    const01 = {propriedade: "novo valor"}
    console.log("Test022 - Const01: " + const01.propriedade)
}

testConst()