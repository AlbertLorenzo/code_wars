const v1 = [2, 3, 4, 5]
const v2 = [4, 3, 3, 1]

const multiplyVectors = (x, y) => x.map((n, i, v) => n * y[i]).reduce((t, n) => t + n)

// Empieza desde 0 sumando el valor actual del vector v1 multiplicado por v2[indice]
const multiplyVectorsOnlyReduce = (x, y) => x.reduce((t, c, i) => t + c * y[i] ,0)

console.log(multiplyVectors(v1, v2))