// getPokemon(1)
import Pokemon from "./scripts/pokemon.js";

getPokemon(1);
let Mypokemon = [];
getPokemon(5)
async function getPokemon(id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    let pokemon = new Pokemon(data.id,data.name,data.moves,data.sprites.other["official-artwork"].front_default)
    console.log(pokemon)
    Mypokemon.push(pokemon)
    console.log(Mypokemon)
}
