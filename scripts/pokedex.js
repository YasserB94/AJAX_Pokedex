
export default class Pokedex{
    constructor(htmlParent){
        this.htmlParent = htmlParent;
    }
    setPokemonByID(id){
        this.pokemon = new Pokemon(id) 
    }
    setPokemonByName(name){
        this.pokemon = new Pokemon(name)
    }
}