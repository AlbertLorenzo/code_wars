const findNextSquare = (num) => Number.isInteger(Math.sqrt(++num)) ? num : findNextSquare(++num)

console.log(findNextSquare(121))