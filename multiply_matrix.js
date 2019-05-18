const multiplyMatrix = (a, b) => {
    const product = a.map((a) => Array.from({ length: b[0].length }).fill(0))
    return product.map((vector, i) => vector.map((value, j) => a[i].reduce((t, n, k) => t + (n * b[k][j]), 0)))
}
const m1 = [
    [1, 2, 3],
    [3, 4, 5],
    [3, 4, 5]
]

const m2 = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3]
]

console.log(multiplyMatrix(m1, m2))