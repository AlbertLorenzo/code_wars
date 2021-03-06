const leftLetters = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
}

const rightLetters = {
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
}

const filterAlgorithm = (vector) => {
        return (filter) => {
            const keys = Object.keys(filter)
            const newMap = vector.split('').map((e, i, v) => Object.values(filter)[keys.indexOf(e)]).filter(e => e)
            return newMap.length > 0 ? newMap.reduce((t, n) => t + n) : 0
        }
}

const alphabetWar = (str) => {
    const filter = filterAlgorithm(`${str}`)
    const right = filter(rightLetters)
    const left = filter(leftLetters)
    return left > right ? 'Left side wins!' : right > left ? 'Right side wins!' : "Let's fight again!";
}

alphabetWar("rn")
