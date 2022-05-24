export default class Pokedex{
    constructor(DOMparent,ownername='anonymous'){
        this.DOMparent = DOMparent;
        this.pokemon =[];
        this.ownername = ownername;
        this.title = `Pokédex of: ${this.ownername}`;
        this.init();
    }
    init(){
        this.createPokedexDOM();
        this.setDOMStyles();
    }
    update(){
        console.log('Pokedex Update')
        this.updatePokeDexDOM()
    }
    draw(){
        console.log('Pokedex Draw')
    

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
    createPokedexDOM(){
        this.DOMcontainer = document.createElement('div');
        this.DOMtitle = document.createElement('p');
        this.DOMpokemonContainer = document.createElement('div');
        this.DOMcontainer.appendChild(this.DOMtitle);
        this.DOMparent.appendChild(this.DOMcontainer)
    }
    setDOMStyles(){
        this.setDOMcontainerStyles();
        this.setDOMtitleStyles();
    }
    setDOMcontainerStyles(){
        this.DOMcontainer.style.padding = '1rem';
        this.DOMcontainer.style.width = '100%';
        this.DOMcontainer.style.height = '80%';
        this.DOMcontainer.style.marginBottom = '10%';
        this.DOMcontainer.style.marginTop = '10%';
        this.DOMcontainer.style.padding = '1rem';
        this.DOMcontainer.style.backgroundColor = '#C82D35';
        this.DOMcontainer.style.textAlign = 'center';
        this.DOMcontainer.style.borderRadius = '5%';
        this.DOMcontainer.style.border = 'solid';
        this.DOMcontainer.style.borderColor = '#4070B2';
        this.DOMcontainer.style.color = '#F7CD46';
    }
    setDOMtitleStyles(){
        this.DOMtitle.style.textTransform = 'uppercase';
        this.DOMtitle.style.borderBottom = 'solid';
        this.DOMtitle.style.borderBlockColor = '#4070B2';
        this.DOMtitle.style.borderRadius = '10%';
    }
    updatePokeDexDOM(){
         this.DOMtitle.innerText = this.title;
    }
}