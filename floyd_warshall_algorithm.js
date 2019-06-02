Array.prototype.FloydWarshall = function() {
    const l = this.length
    const path = this.map((a) => Array.from({ length: l }).fill(0))
    for (let k = 0; k < l; k++) {
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < l; j++) {
                if (this[i][k] + this[k][j] < this[i][j]) {
                    this[i][j] = this[i][k] + this[k][j]
                    path[i][j] = k
                }
            }
        }
    }

    

    return data = {
        "Path matrix": path,
        "sortest path matrix": this
    }
}

const m = [
    [0, 5, 999, 999],
    [50, 0, 15, 5],
    [30, 999, 0, 15],
    [15, 999, 5, 0]
]

console.log(m.FloydWarshall())

