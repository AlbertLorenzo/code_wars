const vector = [1, 1, 1, 2, 1, 1]

const findUniq = (v) => v.find((e) => v.indexOf(e) === v.lastIndexOf(e))

console.log(findUniq(vector))