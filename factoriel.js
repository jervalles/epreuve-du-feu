let arg = process.argv[2]

function facto(arg) {
    let result = 1
    for (let i = arg; i > 0; i--) {
        result = result * i
    }
    console.log(result)
}

facto(arg)