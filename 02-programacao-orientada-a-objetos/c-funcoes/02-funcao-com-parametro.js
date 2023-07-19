/*
Exemplo de função com parâmetros
No exemplo abaixo, ao não indicar o parâmetro sem valor padrão, o resultado foi um NaN
Valores adicionais informados como parâmetro são ignorados
*/

function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }

    return resultado;
}

console.log(potencia());
console.log(potencia(4));
console.log(potencia(2, 6));
console.log(potencia(2, 6, 18));