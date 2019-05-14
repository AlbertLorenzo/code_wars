const fibonacciSequence = (limit) => Array.from({ length: limit }, (_, i) => i).map((n, i, v) => i > 1 ? v[i] = v[i - 1] + v[i - 2] : n)

console.log(fibonacciSequence(15))