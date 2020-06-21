let arg = process.argv[2]

function majuscule(arg) {
    let text = arg.split('')
    let results = ''

    for (let i = 0, k = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            continue
        } else {
            k++
        }
        if (k % 2 == 0) {
            text[i] = text[i].toUpperCase()

        } else {
            text[i] = text[i].toLowerCase()
        }
    }
    results = text.join('')
    console.log(results)
}

majuscule(arg)