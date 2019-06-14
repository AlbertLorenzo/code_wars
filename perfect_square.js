const findNextSquare = (num) => Number.isInteger(Math.sqrt(num)) ? Number.isInteger(Math.sqrt(++num)) ? num : findNextSquare(++num) : -1

console.log(findNextSquare(121))