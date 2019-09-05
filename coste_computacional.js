const Arr = function (val) {
    this.val = Array.from({
        length: val
    }, (_, i) => i)
}

Arr.of = function (val) {
    return new Arr(val)
}

Arr.prototype.sumReduce = function () {
    return this.val.reduce((t, n) => t = t + n)
}

const obj = new Arr.of(99999).sumReduce()

console.time('Tm: ')
console.log(obj)
console.timeEnd('Tm: ')
