//Array.reduce() permite transformar os elementos da lista

array = [4,5,6,7,8,9,10]

let resultado =
    array.reduce(
        (acc, val) => acc += (val%2 == 0) ? val:0,
        0
    )
console.log("A soma dos nros pares é "+resultado)