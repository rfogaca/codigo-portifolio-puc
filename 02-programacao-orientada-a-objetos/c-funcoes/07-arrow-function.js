/*
Sintaxe mais curta em relaação a uma função
Melhor aplicada para funções que não sejam métodos
Não podem ser usados como contrutores
*/

var somar = () => console.log("Função sem parâmetros")
somar()
somar(1)

somar = _ => console.log("usando underscore")
somar()

somar = (x, y) => x + y;
console.log(somar(1, 2));

somar = (x, y) => { return x + y };
console.log(somar(3, 4));

somar = (x, y) => x > y ? x : y;
console.log(somar(5, 6));

somar = (x, y) => {
    if (x > y)
        return x
    else
        return y
}
console.log(somar(7, 8));