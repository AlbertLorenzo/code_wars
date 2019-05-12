const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

const capitals = (word) => {
    return word.split('').map((e, i, v) => alphabet.includes(e) ? i : null).filter(e => e != null)
} 

console.log(capitals('CodEWaRs'))