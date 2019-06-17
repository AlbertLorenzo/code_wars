const isogram = (sortAlgorithm) => (word) => sortAlgorithm(word)

const sortAlgorithm = (word) => !(word.toLowerCase().split('').some((e, i, a) => a.indexOf(e) != i))

console.log(isogram(sortAlgorithm)('isogram'))
