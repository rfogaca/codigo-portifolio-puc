const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Successo!");
    }, 5000);
});

let ifSucceed = (successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
}

myFirstPromise
    .then(ifSucceed);

console.log("Fim do programa")