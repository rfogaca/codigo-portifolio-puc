//Exemplos de funçõoes:

//Sem retorno
function funcaoSemRetorno() {
    console.log("Alô Mundo!");
}

//Com retorno
function funcaoComReturn() {
    return "Alô Mundo!";
}

let msg = funcaoSemRetorno()
//Retorna 'undefined, pois a função 'funcaoSemRetorno()' não retorna valor
console.log(msg)

msg = funcaoComReturn()
console.log(msg)