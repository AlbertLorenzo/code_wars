const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const alphabetPosition = (chain) => chain.toLowerCase().match(/[a-z]/gi).map((e, i, a) => alphabet.indexOf(e) + 1).join(' ')

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// Solución @hencethus sustituyendo el diccionario por charCodeAt - 64
const alphabetPosition = (chain) => chain.toUpperCase().match(/[a-z]/gi).map(e => e.charCodeAt() - 64).join(' ')

console.log(alphabetPosition("The sunset sets at twelve o' clock."))