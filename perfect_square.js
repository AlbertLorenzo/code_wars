Number.prototype.nextSquare = function() {
    let r = this ** 0.5
    return r % 1 ? -1 : ++r ** 2
}
