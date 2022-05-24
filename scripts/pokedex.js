export default class Pokedex{
    constructor(){
        this.pokemon =[];
    }
    setActivePokemon(pokemon){
        this.activePokemon = pokemon;
        this.pokemon.push(pokemon);
    }
    getActivePokemon(){
        return this.activePokemon;
    }
    addPokemon(pokemon){
        this.pokemon.push(pokemon);
    }
    showPokemon(){
        this.pokemon.forEach(pokemon => {
            let main = document.getElementById('main');
            main.appendChild(pokemon.getDOMElements())
            
            
        });
    }
}