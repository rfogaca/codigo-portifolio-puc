//Array.map() permite transformar os elementos da lista

array = [4,5,6,7,8,9,10]

var newMap = array.map((item) => item * 2)
console.log(newMap)

newMap = array.map((item) => {return {x: item, y: 2*item}})

console.log(newMap)