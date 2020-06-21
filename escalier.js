let argument = process.argv[2]

if (typeof argument === "string") {
    argument = parseInt(argument)
}

let espace = ''
let line = ''

function escalier(argument) {
    for (let i = 0; i < argument; i++) {
        espace = argument - i - 1
        line = " ".repeat(espace) + "#".repeat(i + 1)
        console.log(line)
    }
}

if (argument <= 0 || typeof argument !== "number") {
    console.log("L'argument doit être un nombre supérieur à zero")
} else {
    console.log("Lancement de la fonction escalier")
    escalier(argument)
}