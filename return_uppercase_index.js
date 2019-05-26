const capitals = (word) => word.split('')
                    .map((e, i, v) => e.match(/[A-Z]/) ? v.indexOf(e) : undefined)
                    .filter(e => e != undefined)

console.log(capitals('CodEWaRs'))