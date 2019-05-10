const vector = ["Telescopes", "Glasses", "Eyes", "Monocles"]

const sortByLength = (array) => array.map(e => e).sort((a, b) => a.length - b.length)

console.log(sortByLength(vector))