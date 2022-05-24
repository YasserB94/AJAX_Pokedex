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
    }
    draw(){
        console.log('Pokedex Draw')
        this.drawDOMheader();
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
        this.DOMtitleSpan = document.createElement('span');
        //Append Header elements
        this.DOMheader.appendChild(this.DOMtitle);
        //-----POKEDEX BODY----
        this.DOMbody = document.createElement('div')
        //Create Body elements
        //Append body elements
        //-----POKEDEX FOOTER----
        this.DOMfooter = document.createElement('div')
        //Create Footer Elements
        //Append Footer elements
        //APPEND HEADER BODY AND FOOTER TO MAIN CONTAINER
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
        this.DOMheader.style.height = '10%';
        this.DOMheader.style.width = '100%';
        this.DOMheader.style.padding = '.5rem';
        this.DOMheader.style.border = 'dashed';
        this.DOMheader.style.borderColor = '#F7CD46';
        this.DOMheader.style.borderTopLeftRadius = '1rem';
        this.DOMheader.style.borderTopRightRadius = '1rem';
        this.DOMheader.style.textTransform = 'uppercase';
        this.DOMheader.style.fontWeight = '800';

        this.DOMtitle.style.border = 'solid';
        this.DOMtitle.style.borderTop = 'none';
        this.DOMtitle.style.borderColor = '#4070B2';
        this.DOMtitle.style.borderRadius = '1rem';
        this.DOMtitle.style.borderTopLeftRadius = '0';
        this.DOMtitle.style.borderTopRightRadius = '0';
        this.DOMtitle.style.marginTop = '.5rem';
    }
    setDOMbodyStyles(){
        this.DOMbody.style.backgroundColor = 'pink';
        this.DOMbody.style.width = '100%';
        this.DOMbody.style.height='80%';
        this.DOMheader.style.padding = '.5rem'

    }
    setDOMfooterStyles(){
        this.DOMfooter.style.backgroundColor ='blue';
        this.DOMfooter.style.marginTop = 'auto';
        this.DOMfooter.style.width = '100%';
        this.DOMfooter.style.height = '10%';
        this.DOMheader.style.padding = '.5rem'
    }
    drawDOMheader(){
        this.DOMtitle.innerText = 'Pokédex of: ';
        this.DOMtitleSpan.innerText = this.ownername;
        this.DOMtitle.appendChild(this.DOMtitleSpan);
    }
}