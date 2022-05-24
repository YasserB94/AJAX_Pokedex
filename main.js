// getPokemon(1)
import Pokemon from "./scripts/pokemon.js";
import Pokedex from './scripts/pokedex.js';
const main = document.getElementById('poke-container');
let myPokeDex = new Pokedex(main,'yasser');
const pdexControlBTNSearch = document.getElementById('pdex-btnSearch')
const pdexControlINPUTSearch = document.getElementById('pdex-fieldSearch')
pdexControlBTNSearch.addEventListener('click',()=>{
    const searchValue = pdexControlINPUTSearch.value;
    createPokemon(searchValue);
})
// createPokemon(2)
// createPokemon(5)
// createPokemon(6)

showPokedex()
setInterval(showPokedex,1000)
function showPokedex(){
    myPokeDex.update();
    myPokeDex.draw()
}
async function fetchPokemon(id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchPokemonPrevolutions(pokemonName) {
    //Go to pokemon, get species, get species url, go to species url, get evolution chain, 
    let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchPokemonEvolutions(pokemonName) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    const response = await fetch(url);
    const data = await response.json();
    let evoChainURL = await data.evolution_chain.url;
    const evoResponse = await fetch(evoChainURL);
    const evoData = await evoResponse.json();
    return evoData;
}
async function createPokemon(id) {
    let pokemonData = await fetchPokemon(id);
    let pokemonPrevoData = await fetchPokemonPrevolutions(pokemonData.name);
    let pokemonEvoData = await fetchPokemonEvolutions(pokemonData.name)
    //Get 4 random moves
    const pokemonID = pokemonData.id;
    const pokemonName = pokemonData.name;
    let moves = [];
    for (let randomMoveIndex = Math.floor(Math.random() * pokemonData.moves.length); moves.length < 4; randomMoveIndex = Math.floor(Math.random() * pokemonData.moves.length)) {
        moves.push(pokemonData.moves[randomMoveIndex].move.name)
    }
    const pokemonSprite = pokemonData.sprites.other["official-artwork"].front_default;
    let pokemonPrevolution, pokemonEvolution;
    try {
        pokemonPrevolution = pokemonPrevoData.evolves_from_species.name;
    } catch {
        pokemonPrevolution = null;
    }
    try {
        pokemonEvolution = pokemonEvoData.chain.evolves_to[0].species.name;
    } catch {
        pokemonEvolution = null;
    }
    let pokemon = new Pokemon(pokemonID, pokemonName, moves, pokemonSprite, pokemonPrevolution, pokemonEvolution);
    myPokeDex.addPokemon(pokemon)
}
//POKEDEX
