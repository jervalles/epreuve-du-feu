const argument = process.argv.slice(2);

const arrayOfNumbers = argument.map(Number)

function tri(array) {
    let done = false
    while (!done) {
        done = true
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = false
                let temp = array[i - 1]
                array[i - 1] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}

console.log(tri(arrayOfNumbers))