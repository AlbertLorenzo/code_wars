const names = ['Alex', 'Jacob', 'Mark', 'Max', 'Albert']

const ifElseStatement = (v) => {
    const vlen = v.length
    if (vlen === 0) return 'no one likes this' 
    else if (vlen ===1 ) return `${v[0]} likes this`
    else if (vlen === 2) return `${v[0]} and ${v[1]} like this`
    else if (vlen === 3) return `${v[0]}, ${v[1]} and ${v[2]} like this`
    return `${v[0]}, ${v[1]} and ${vlen - 2} others like this`
}

const swithStatement = (v) => {
    switch (v.length) {
        case 0: return 'no one likes this' 
        case 1: return `${v[0]} likes this`
        case 2: return `${v[0]} and ${v[1]} like this`
        case 3: return `${v[0]}, ${v[1]} and ${v[2]} like this`
        default: return `${v[0]}, ${v[1]} and ${v.length - 2} others like this`
    }
}

console.time('switch')
console.log(swithStatement(names))
console.timeEnd('switch')

console.time('elseif')
console.log(ifElseStatement(names))
console.timeEnd('elseif')