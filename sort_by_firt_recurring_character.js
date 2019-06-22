const vector = 'DBKCSKA'.split('')

const firstRecurring = (sort) => (v) => sort(v)

const sortAlgorithm = () => vector.filter((e, i, a) => (a.indexOf(e) != i)).map(e => e).join('')

const result = firstRecurring(sortAlgorithm)(vector)

console.log(result)
