//Exemplo dce comando de repetição FOR

var a = []
a[0] = Math.random()
a[1] = Math.random()
a[9] = Math.random()
console.log(a.length)

console.log(" -for .. in- ")
console.log(" -=-=-=-=-=-")
for(let val in a)
    console.log(" --> " + val)
console.log(" -=-=-=-=-=- \n")

console.log(" -for .. of- ")
console.log(" -=-=-=-=-=-")
for(let val of a)
    console.log(" --> " + val)
console.log(" -=-=-=-=-=- \n")

console.log(" -for .. (;;)- ")
console.log(" -=-=-=-=-=-")
for(let i=0; i<a.length; i++)
    console.log(" -->" + i + ": " + a[i])
