const nums = Array.from({
    length: 5000000
}, (_, i) => i)

Array.prototype.iterativeSum = function() {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}

Array.prototype.reduceSum = function() {
    return this.reduce((t, n) => t += n) 
}

console.time('time: ')
console.log(nums.iterativeSum())
console.timeEnd('time: ')