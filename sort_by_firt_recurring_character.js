const vector = 'DBKCKSA'.split('')

const firstRecurring = (sortFnt) => (v) => sortFnt(v)

const sortAlgorithm = () => vector.filter((e, i, a) => (a.indexOf(e) != i)).map(e => e).join('')

const result = firstRecurring(sortAlgorithm)

console.log(result(vector))