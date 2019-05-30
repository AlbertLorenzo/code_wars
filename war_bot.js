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
    return this.toFlat().filter(e => e == country).length
}

Array.prototype.checkRecurrency = function() {
    return this.every(e => e === this[0])
}

Array.prototype.attack = function (attacker, defender) {
    const attackerStr = this.strength(attacker)
    const defenderStr = this.strength(defender)

    const nRndAttacker = Math.random() * attackerStr
    const nRndDefender = Math.random() * defenderStr

    return nRndAttacker > nRndDefender ? true : false
}

Map.prototype.doWar = function () {
    let flatMap = this.map.toFlat()
    let WarHasEnded = flatMap.checkRecurrency()
    do {
        const nCountry = Math.floor(Math.random() * this.map.length)
        const countryName = Math.floor(Math.random() * this.map[nCountry].length)
        const currentCountry = this.map[nCountry][countryName]

        switch (Math.floor(Math.random() * 3)) {
            case 0:
                if (this.map[nCountry]) {
                    if (this.map[nCountry][countryName - 1]) {
                        // Left
                        if (this.map.attack(currentCountry, this.map[nCountry][countryName - 1]) && this.map[nCountry][countryName - 1] != currentCountry) {
                            this.map[nCountry][countryName - 1] = currentCountry
                        }
                    }
                } else {
                    break
                }

            case 1:
                if (this.map[nCountry]) {
                    if (this.map[nCountry][countryName + 1]) {
                        // Right
                        if (this.map.attack(currentCountry, this.map[nCountry][countryName + 1]) && this.map[nCountry][countryName + 1] != currentCountry) {
                            this.map[nCountry][countryName + 1] = currentCountry
                        }
                    }
                } else {
                    break
                }

            case 2:
                if (this.map[nCountry - 1]) {
                    if (this.map[nCountry - 1][countryName]) {
                        // Top
                        if (this.map.attack(currentCountry, this.map[nCountry - 1][countryName]) && this.map[nCountry - 1][countryName] != currentCountry) {
                            this.map[nCountry - 1][countryName] = currentCountry
                        }
                    }
                } else {
                    break
                }

            case 3:
                if (this.map[nCountry + 1]) {
                    if (this.map[nCountry + 1][countryName]) {
                        // Bottom
                        if (this.map.attack(currentCountry, this.map[nCountry + 1][countryName]) && this.map[nCountry + 1][countryName] != currentCountry) {
                            this.map[nCountry + 1][countryName] = currentCountry
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

    console.log(flatMap)
    return this.map[0][0]
}

const map = Map.of(espanya)
console.log(`${map.doWar()} ha ganado la guerra.`)
