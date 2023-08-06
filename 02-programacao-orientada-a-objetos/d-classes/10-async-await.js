async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 5000);
    });
    let resultado = await promise;
    return resultado;
}
console.log("Iniciando o programa")
fazAlgo().then((msg) => console.log(msg))

console.log("Finalizando o programa")
console.log("Iniciando o programa")

fazAlgo().then((msg) => console.log(msg))

console.log("Finalizando o programa")

async function main() {
    console.log("Iniciando o programa")
    console.log(await (fazAlgo()))
    console.log("Finalizando o programa")
}
main()