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
        const map = vector.split('').filter(e => keys.includes(e)).map(e =>
            keys[Object.keys(filter).indexOf(e)]
        )
        return map.length > 0 ? map.reduce((t, n) => t + n) : 0
    }
}

const alphabetWar = (str) => {
    const filter = filterAlgorithm(`${str}`)
    return (filter(rightLetters) === filter(leftLetters)) ? 
    "Let's fight again!" : filter(rightLetters) > filter(leftLetters) ? 'Right side wins!' : 'Left side wins!'
}

console.log(
    alphabetWar("rn")
)

// Solución de @Willworth code wars
// function alphabetWar(fight) {
//     const map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 }
//     const result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0)
//     return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!"
// }