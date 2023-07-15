/*
Testa constantes dentro e fora de um bloco de código
Neste exemplo ocorrem dois erros:
    01 - const01 não pode receber um novo valor
    02 - constantes não são acessíveis fora do bloco, então const02 não pode ser impressa
*/
function testConst(){
    const const01 = "const 01"
    {
        const const02 = "const 02"
        console.log("Test01 - Const01: " + const01)
        console.log("Test01 - Const02: " + const02)
    }

    const01 = "novo valor"
    console.log("Test02 - Const01: " + const01)
    console.log("Test02 - Const02: " + const02)   
}

testConst()