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
        //MAIN CONTAINER
        this.DOMcontainer = document.createElement('div');

        //-----POKEDEX HEADER----
        this.DOMheader = document.createElement('div')
        //Create Header elements
        this.DOMtitle = document.createElement('p');
        //Append Header elements
        //-----POKEDEX BODY----
        this.DOMbody = document.createElement('div')
        //Create Body elements
        //Append body elements
        //-----POKEDEX FOOTER----
        this.DOMfooter = document.createElement('div')
        
        //Create Footer Elements

        //Append Footer elements
        //APPEND ELEMENTS TO MAIN CONTAINER
        this.DOMcontainer.appendChild(this.DOMheader);
        this.DOMcontainer.appendChild(this.DOMbody);
        this.DOMcontainer.appendChild(this.DOMfooter);
        //APPEND MAIN CONTAINER TO PARENT
        this.DOMparent.appendChild(this.DOMcontainer)
    }
    setDOMStyles(){
        this.setDOMcontainerStyles();
        this.setDOMheaderStyles();
        this.setDOMbodyStyles();
        this.setDOMfooterStyles();
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
    setDOMheaderStyles(){
        this.DOMheader.style.backgroundColor = 'yellow';
        this.DOMheader.style.height = '10%';
        this.DOMheader.style.width = '100%';
    }
    setDOMbodyStyles(){
        this.DOMbody.style.backgroundColor = 'pink';
        this.DOMbody.style.width = '100%';
        this.DOMbody.style.height='80%';
    }
    setDOMfooterStyles(){
        this.DOMfooter.style.backgroundColor ='blue';
        this.DOMfooter.style.marginTop = 'auto';
        this.DOMfooter.style.width = '100%';
        this.DOMfooter.style.height = '10%';
    }
    updatePokeDexDOM(){
         this.DOMtitle.innerText = this.title;
    }
}