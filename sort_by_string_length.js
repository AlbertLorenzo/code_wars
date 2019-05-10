const vector = ["Telescopes", "Glasses", "Eyes", "Monocles"]

const sortByLength = (array) => array.sort((a, b) => a.length - b.length )

console.log(sortByLength(vector))