const test = (str) => (letter) => str.split('').filter(e => e.toLowerCase() == `${letter}`).length

const testString = test('hoOlaxx')

const XO = testString('x') == testString('o') ? true : false

console.log(XO)