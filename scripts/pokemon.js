export default class Pokemon {
    constructor(id,name,moves,sprite,prevolutions,evolutions) {
        this.id = id;
        this.name = name;
        this.moves = moves;
        this.sprite = sprite;
        this.prevolution = prevolutions;
        this.evolution = evolutions;
        this.init();
    }
    init(){
        this.createDOMElements();
        this.setDOMElements();
        this.setDOMStyles();
    }
    createDOMElements(){
        this.DOMpokemonContainer = document.createElement('div');
        this.DOMpokemonName = document.createElement('p')
        this.DOMpokemonMoves = document.createElement('p')
        this.DOMpokemonSprite = document.createElement('img')
        this.DOMpokemonPrevolutions = document.createElement('p')
        this.DOMpokemonEvolutions = document.createElement('p')
    }
    setDOMElements(){
        this.DOMpokemonName.innerText = this.name;
        this.DOMpokemonName.setAttribute('id','pokemon-name')
        this.DOMpokemonMoves.innerText = this.moves;
        this.DOMpokemonMoves.setAttribute('id','pokemon-moves')
        this.DOMpokemonSprite.src = this.sprite;
        this.DOMpokemonSprite.setAttribute('id','pokemon-sprite')
        this.DOMpokemonSprite.alt = `An image representing: ${this.name}`;
        this.DOMpokemonPrevolutions.innerText = this.prevolution;
        this.DOMpokemonPrevolutions.setAttribute('id','pokemon-preevolutions')
        this.DOMpokemonEvolutions.innerText = this.evolution;
        this.DOMpokemonEvolutions.setAttribute('id','pokemon-evolutions')
        this.DOMpokemonContainer.appendChild(this.DOMpokemonSprite);
        this.DOMpokemonContainer.appendChild(this.DOMpokemonName);
        this.DOMpokemonContainer.appendChild(this.DOMpokemonMoves);
        this.DOMpokemonContainer.appendChild(this.DOMpokemonPrevolutions)
        this.DOMpokemonContainer.appendChild(this.DOMpokemonEvolutions)
    }
    setDOMStyles(){
        this.DOMpokemonContainer.style.display = 'flex';
        this.DOMpokemonContainer.style.flexDirection = 'column';
        this.DOMpokemonContainer.style.backgroundColor = 'pink';
        this.DOMpokemonContainer.style.textAlign = 'center';
    }
    getDOMElements(){
        return this.DOMpokemonContainer;
    }
}

