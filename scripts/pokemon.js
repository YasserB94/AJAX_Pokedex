export default class Pokemon {
    constructor(id,name,moves,sprite) {
        this.id = id;
        this.name = name;
        this.moves = moves;
        this.sprite = sprite;
    }

}
async function getPokemon(id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    
}
