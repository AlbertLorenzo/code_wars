const numbers = [4, 3, -1, -5]

const sumPositives = (v) => v.reduce((t, n) => t + (n > 0 ? n : 0), 0)

console.log(sumPositives(numbers))