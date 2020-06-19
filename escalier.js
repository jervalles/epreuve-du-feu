const argument = process.argv[2]

console.log("Lancement de la fonction escalier")

function escalier(argument) {
    let marche = ''
    for (let i = 0; i < argument; i++) {
        marche = marche.concat('', '#')
        console.log(marche)
    }
}

escalier(argument)

/* pour lancer la fonction dans le shell : node escalier.js 20 */