let arg = process.argv[2]

function majuscule(arg) {
    let text = arg.split('')

    for (let i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
            text[i] = text[i].toLowerCase()
        } else {
            text[i] = text[i].toUpperCase()
        }
    }
    console.log(text.join(''))
}

majuscule(arg)