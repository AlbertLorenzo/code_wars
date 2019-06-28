Number.prototype.nextSquare = function() {
    const r = Math.sqrt(this)
    return r % 1 ? -1 : ++r * r
}
