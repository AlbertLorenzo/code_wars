// const vector = [...Array(50).keys()] Cada posición del vector será igual a su índice, empieza desde 0 por lo que el rango será 0-49
const vector = Array.from({length: 50}, (v, i) => i + 1) // Rango 1-50

const fizzBuzzFizzbuz = (vec) => vec.map((n, i, v) => {
    return n % 3 === 0 ? n % 5 === 0 ? `${n} : fizzBuzz` : `${n} : fizz` : n % 5 === 0 ? `${n} : buzz` : 0
} ).filter(e => e != 0)

console.log(fizzBuzzFizzbuz(vector))