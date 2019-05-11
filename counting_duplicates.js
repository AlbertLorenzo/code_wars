const duplicateCount = (v) => {
    return v.toLowerCase().split('').filter((e, i, v) => v.indexOf(e) !== i && v.lastIndexOf(e) === i).length
} 

console.log(duplicateCount('abcdefghabcdABCabA ?'))