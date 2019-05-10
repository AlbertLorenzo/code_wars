const sequenceSum = (begin, end, step) => begin > end ? 0 : begin + sequenceSum(begin + step, end, step)

console.log(`${sequenceSum(2, 2, 2)}\n${sequenceSum(2, 6, 2)}\n${sequenceSum(1, 5, 1)}`)