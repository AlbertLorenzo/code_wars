const vowels = ['a', 'e', 'i', 'o', 'u']

const getCount = (str) => str.toLowerCase().split('').filter((e) => Object.values(vowels).includes(e)).length

console.log(getCount('abracadabra'))