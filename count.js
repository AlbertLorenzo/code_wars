const palabra = "Albert"

const count = string => char => string.toLowerCase().split('').filter((c) => c === char).length 

String.prototype.count = function(char) {
    return this.toLowerCase().split('').filter((c) => c === char).length 
}

console.log(count('Albbert')('a'))

console.log('Albert'.count('b'))
