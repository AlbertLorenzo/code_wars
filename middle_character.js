const getMiddle = (s) => {
    const sVector = s.split('')
    return sVector.length % 2 === 0 ? `${sVector[(sVector.length / 2) - 1]}${sVector[(sVector.length / 2)]}` : `${sVector[(sVector.length / 2 - .5)]}`
}

console.log(getMiddle('test'))