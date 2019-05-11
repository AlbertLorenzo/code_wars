const vector = [1,2,'a','b']

const filterAlgorithm = (str) => str.filter(e =>  typeof e === 'number')

console.log(filterAlgorithm(vector))
