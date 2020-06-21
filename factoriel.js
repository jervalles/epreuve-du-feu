let arg = process.argv[2]

function facto(arg) {
    
    if (arg <= 1) {
        return 1
    } else {
        return arg * facto(arg-1)
    }
}

console.log(facto(arg))