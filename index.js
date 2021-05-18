// This project will evaluate your ability to work with asynchronous, non-blocking Javascript code. 
// The goal of this checkpoint is not to finish quickly, but rather to do the best you can so we can gauge where everyone in 
// the class is at and how well you're absorbing the material. Take your time and don't stress out!

// You will be:

// processing file data
// processing API data
// Submitting the project:

// Create a new repository named USSF-js-async-checkpoint to submit your code for this project.
// Submit a link to your respository below.
// Project instructions

// Create a command line application that processes a file list of pokemon names (each name seperated by a new line) 
// and logs each Pokemon's types (for some there are many) according to the pokeapi.co API. 
// (If you don't know what a command line application, feel free to look online or check out this article)
// This is an assessment of both your understanding of the course material so far and your ability to independently 
// problem solve and use the internet/other resources to implement anything you don't understand.
// This checkpoint (and all checkpoints) are OPEN BOOK - by that we mean you are free to use any online resource, 
// just as you would as a real engineer. (This (obviously) excludes solution repos)
// Example file input (input.txt)

// https://pokeapi.co/api/v2/pokemon/

// "types":[{"slot":1,"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"}}]

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

getTypes('C:\\Users\\alexc\\Desktop\\Supra Coders\\Code\\class\\asynchronous code\\pokemon-names.txt')