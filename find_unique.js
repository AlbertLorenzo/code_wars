const vector = [4, 4, 'foo', 4 ]

const findUniq = (v) => v.find((e) => v.indexOf(e) === v.lastIndexOf(e))

console.log(findUniq(vector))