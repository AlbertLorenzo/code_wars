const range = (begin, end, step) => {
    return Array.from({length: (end - begin) / step + 1}, (_, i) => begin + (i * step))
}

console.log(range(0, 10, 2))