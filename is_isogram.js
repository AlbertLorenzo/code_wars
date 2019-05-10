const isogram = (sortAlgorithm) => (word) => sortAlgorithm(word)

const sortAlgorithm = (word) => !(word.toLowerCase().split('').some((e, i, a) => a.indexOf(e) != i))

const isIsogram = isogram(sortAlgorithm)

console.log(isIsogram('isogram'))

// Otra solución por @chunjef code wars return !/(\w).*\1/i.test(str)