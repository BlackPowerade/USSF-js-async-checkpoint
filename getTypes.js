const fs = require('fs')
const fetch = require('node-fetch')

const getTypes = (input) => {
    let pokemonArray = fs.readFileSync(input).toString().split('\r\n')

    pokemonArray.forEach(element => {
        let pokemonTypes = []

        fetch(`https://pokeapi.co/api/v2/pokemon/${element}?types`)
            .then( res => res.json())
            .then( res => res.types)
            .then( res => {
                res.forEach( element => pokemonTypes.push(element.type.name) )
                return pokemonTypes
            })
            .then( res => res.join(', ') )
            .then( res => console.log(`${element}: ${res}`))

    })
}
