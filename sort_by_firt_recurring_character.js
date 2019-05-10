const vector = 'DBKCSKA'.split('')

const firstRecurring = (sort) => (v) => sort(v)

// Con array.indexOf(elemento) != i 
// Comprobamos de izquierda a derecha que una string
// contenga un segundo valor <e> idéntico al que estamos buscando
const sortAlgorithm = () => vector.filter((e, i, a) => (a.indexOf(e) != i)).map(e => e).join('')

const result = firstRecurring(sortAlgorithm)

console.log(result(vector))