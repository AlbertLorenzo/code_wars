const factorial = function (num) {
    this.num = factorial.calcFactorial(num)
}

factorial.of = function (num) {
    return new factorial(num)
}

factorial.calcFactorial = function (num) {
    let result = 1
    for (let i = num; i > 0; i--) {
        result *= i
    }
    return result
}

factorial.checkIfBigNum = function(num) {
    if (`${num}`.indexOf('e') !== -1) { 
        const exponent = parseInt(`${num}`.split('e+')[1])
        const result = num.toFixed(exponent)
        console.log(result)
        return result
    } else {
        return `${num}`
    }
}

factorial.prototype.trailingZeros = function () {
    let zeros = []
    let num = factorial.checkIfBigNum(this.num)
    let c = num.split('').length - 1
    while (num.split('')[c] == 0) {
        zeros.push(num.split('')[c])
        c--
    }
    return zeros.length
}

console.log(factorial.of(30).trailingZeros())
