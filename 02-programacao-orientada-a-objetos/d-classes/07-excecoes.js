class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function vaiDarErro() {
    throw new ValidationError("Dados inválidos!");
}

console.log("Executando...");

try {
    vaiDarErro()
}
catch (e) {
    console.error(`${e.name}: ${e.message}`);
}