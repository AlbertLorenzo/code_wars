// Solución @hencethus sustituyendo el diccionario por charCodeAt - 64
// La solución original utilizaba un alfabeto -> const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetPosition = (chain) => chain.toUpperCase().match(/[a-z]/gi).map(e => e.charCodeAt() - 64).join(' ')

console.log(alphabetPosition("The sunset sets at twelve o' clock."))