const multiplyMatrix = (a, b) => {
    const product = Array.from({ length: a.length }, (_, i) => Array({ length: b[0].length }, (_, k) => k).fill(0))
    return product.map((vector, i) =>
        vector.map((value, j) =>
            a[i].reduce((total, n, k) => total + (n * b[k][j]), 0
    )))
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