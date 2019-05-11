const Numbers = function (vector) {
    this.vector = vector
}

Numbers.prototype.square = function () {
    return this.vector.map(e => e ** 2)
}

Numbers.prototype.cube = function () {
    return this.vector.map(e => e ** 3)
}

Numbers.prototype.sum = function () {
    return this.vector.reduce((t, e) => t + e)
}

Numbers.prototype.even = function () {
    return this.vector.filter((e) => e % 2 === 0)
}

Numbers.prototype.odd = function () {
    return this.vector.filter((e) => e % 2)
}

const numbers = new Numbers([1, 2, 3, 4, 5])