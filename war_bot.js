const espanya = [
    ['Galicia', 'Asturias', 'Cantabria', 'País Vasco', 'Navarra', 'Aragón', 'Cataluña'],
    ['Castilla y León', 'La Rioja'],
    ['Madrid'],
    ['Extremadura', 'Castilla la Mancha', 'Comunidad Valenciana', 'Islas Baleares'],
    ['Andalucía', 'Murcia'],
    ['Canarias']
]

const Map = function (countryList) {
    this.map = countryList
}

Map.of = function (countryList) {
    return new Map(countryList)
}

Array.prototype.toFlat = function() {
    return [].concat(...this)
}

Array.prototype.strength = function (country) {
    const flatMap = this.toFlat()
    return flatMap.filter(e => e == country).length
}

Array.prototype.checkRecurrency = function() {
    return this.every(e => e === this[0])
}

Array.prototype.attack = function (attacker, defender) {
    const attackerStr = this.strength(attacker)
    const defenderStr = this.strength(defender)

    const nRndAttacker = Math.random() * (attackerStr - 0) + 0
    const nRndDefender = Math.random() * (defenderStr - 0) + 0

    return nRndAttacker > nRndDefender ? true : false
}

Map.prototype.doWar = function () {
    let flatMap = this.map.toFlat()
    let WarHasEnded = flatMap.checkRecurrency()
    do {
        const nCountry = Math.floor(Math.random() * (this.map.length - 0) + 0)
        const countryName = Math.floor(Math.random() * (this.map[nCountry].length - 0) + 0)

        const actualCountry = this.map[nCountry][countryName]

        switch (Math.floor(Math.random() * (3 - 0) + 0)) {
            case 0:
                if (this.map[nCountry]) {
                    if (this.map[nCountry][countryName - 1]) {
                        // Left
                        if (this.map.attack(actualCountry, this.map[nCountry][countryName - 1]) && this.map[nCountry][countryName - 1] != actualCountry) {
                            this.map[nCountry][countryName - 1] = actualCountry
                        }
                    }
                } else {
                    break
                }

            case 1:
                if (this.map[nCountry]) {
                    if (this.map[nCountry][countryName + 1]) {
                        // Right
                        if (this.map.attack(actualCountry, this.map[nCountry][countryName + 1]) && this.map[nCountry][countryName + 1] != actualCountry) {
                            this.map[nCountry][countryName + 1] = actualCountry
                        }
                    }
                } else {
                    break
                }

            case 2:
                if (this.map[nCountry - 1]) {
                    if (this.map[nCountry - 1][countryName]) {
                        // Top
                        if (this.map.attack(actualCountry, this.map[nCountry - 1][countryName]) && this.map[nCountry - 1][countryName] != actualCountry) {
                            this.map[nCountry - 1][countryName] = actualCountry
                        }
                    }
                } else {
                    break
                }

            case 3:
                if (this.map[nCountry + 1]) {
                    if (this.map[nCountry + 1][countryName]) {
                        // Bottom
                        if (this.map.attack(actualCountry, this.map[nCountry + 1][countryName]) && this.map[nCountry + 1][countryName] != actualCountry) {
                            this.map[nCountry + 1][countryName] = actualCountry
                        }
                    }
                } else {
                    break
                }

            default:
                break
        }
        flatMap = this.map.toFlat()
        WarHasEnded = flatMap.checkRecurrency()
    } while (!WarHasEnded)

    return this.map[0][0]
}

const map = Map.of(espanya)

console.log(`${map.doWar()} ha ganado la guerra.`)