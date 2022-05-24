export default class Pokedex {
    constructor(DOMparent, ownername = 'anonymous') {
        this.DOMparent = DOMparent;
        this.pokemon = [];
        this.ownername = ownername;
        this.title = `Pokédex of: ${this.ownername}`;
        this.init();
        this.currentActivePokemonIndex = 0;
        this.previousActivePokemonIndex = 0;
    }
    init() {
        this.createPokedexDOM();
        this.setDOMStyles();
    }
    update() {
        this.updateDisplayedPokemon();
    }
    draw() {
        this.drawDOMheader();
        this.drawDOMBody();
        this.drawDOMfooter();
    }
    updateDisplayedPokemon(){
        if(this.pokemon.length>this.previousActivePokemonIndex){
            this.currentActivePokemonIndex = this.pokemon.length-1;
        }
    }
    setActivePokemon(pokemon) {
        this.activePokemon = pokemon;
        this.pokemon.push(pokemon);
    }
    getActivePokemon() {
        return this.activePokemon;
    }
    addPokemon(pokemon) {
        this.pokemon.push(pokemon);
    }
    createPokedexDOM() {
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
        this.DOMbody = document.createElement('div');
        //Create Body elements
        this.DOMbodyPokemonImage = document.createElement('img');
        this.DOMbodyPokemonName = document.createElement('p');
        this.DOMbodyPokemonMoves = document.createElement('p');
        this.DOMbodyPokemonPrevolution = document.createElement('p');
        this.DOMbodyPokemonEvolution = document.createElement('p');
        //Append body elements
        this.DOMbody.appendChild(this.DOMbodyPokemonImage);
        this.DOMbody.appendChild(this.DOMbodyPokemonName);
        this.DOMbody.appendChild(this.DOMbodyPokemonMoves);
        this.DOMbody.appendChild(this.DOMbodyPokemonPrevolution);
        this.DOMbody.appendChild(this.DOMbodyPokemonEvolution);
        //-----POKEDEX FOOTER----
        this.DOMfooter = document.createElement('div')
        //Create Footer Elements
        this.DOMfooterPdexControlsContainer = document.createElement('div');
        this.DOMpdexControlPokemonSearchField = document.createElement('input');
        this.DOMpdexControlPokemonSearchField.setAttribute('id','pdex-fieldSearch')
        this.DOMpdexControlPokemonSearchButton = document.createElement('button');
        this.DOMpdexControlPokemonSearchButton.setAttribute('id','pdex-btnSearch')
        this.DOMfooterText = document.createElement('p');
        //Append Footer elements
        this.DOMfooterPdexControlsContainer.appendChild(this.DOMpdexControlPokemonSearchField);
        this.DOMfooterPdexControlsContainer.appendChild(this.DOMpdexControlPokemonSearchButton);
        this.DOMfooter.appendChild(this.DOMfooterPdexControlsContainer);
        this.DOMfooter.appendChild(this.DOMfooterText);
        //APPEND HEADER BODY AND FOOTER TO MAIN CONTAINER
        this.DOMcontainer.appendChild(this.DOMheader);
        this.DOMcontainer.appendChild(this.DOMbody);
        this.DOMcontainer.appendChild(this.DOMfooter);
        //APPEND MAIN CONTAINER TO PARENT
        this.DOMparent.appendChild(this.DOMcontainer)
    }
    setDOMStyles() {
        this.setDOMcontainerStyles();
        this.setDOMheaderStyles();
        this.setDOMbodyStyles();
        this.setDOMfooterStyles();
    }
    setDOMcontainerStyles() {
        this.DOMcontainer.style.padding = '1rem';
        this.DOMcontainer.style.width = '100%';
        this.DOMcontainer.style.height = '80%';
        this.DOMcontainer.style.minHeight = '80vh';
        // this.DOMcontainer.style.marginBottom = '10%';
        // this.DOMcontainer.style.marginTop = '10%';
        this.DOMcontainer.style.padding = '1rem';
        this.DOMcontainer.style.backgroundColor = '#C82D35';
        this.DOMcontainer.style.textAlign = 'center';
        this.DOMcontainer.style.borderRadius = '5%';
        this.DOMcontainer.style.border = 'solid';
        this.DOMcontainer.style.borderColor = '#4070B2';
        this.DOMcontainer.style.color = '#F7CD46';
    }
    setDOMheaderStyles() {
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
        this.DOMtitle.style.borderTopLeftRadius = '100%';
        this.DOMtitle.style.borderTopRightRadius = '100%';
        this.DOMtitle.style.marginTop = '.5rem';
    }
    setDOMbodyStyles() {
        // this.DOMbody.style.backgroundColor = 'pink';
        this.DOMbody.style.width = '100%';
        this.DOMbody.style.height = '60%';
        this.DOMbody.style.minHeight = '60%';
        this.DOMbody.style.maxHeight = '80%';
        this.DOMbody.style.padding = '.5rem';
        this.DOMbody.style.borderLeft = 'dashed';
        this.DOMbody.style.borderRight = 'dashed';
        this.DOMbody.style.backgroundColor = 'green';
        this.DOMbodyPokemonImage.style.height = '50%';
    }
    setDOMfooterStyles() {
        // this.DOMfooter.style.backgroundColor ='blue';
        this.DOMfooter.style.marginTop = 'auto';
        this.DOMfooter.style.width = '100%';
        this.DOMfooter.style.height = '30%';
        this.DOMfooter.style.padding = '.5rem'
        this.DOMfooter.style.border = 'dashed';
        this.DOMfooter.style.borderBottomLeftRadius = '1rem';
        this.DOMfooter.style.borderBottomRightRadius = '1rem';

        this.DOMfooterPdexControlsContainer.style.height = '90%';
        this.DOMfooterPdexControlsContainer.style.width = '100%';
        this.DOMpdexControlPokemonSearchButton.style.marginLeft = '1%';
    }
    drawDOMheader() {
        this.DOMtitle.innerText = 'Pokédex of: ';
        this.DOMtitleSpan.innerText = this.ownername;
        this.DOMtitle.appendChild(this.DOMtitleSpan);
    }
    drawDOMBody() {
        if(this.pokemon[this.currentActivePokemonIndex]!=undefined){
        this.DOMbodyPokemonImage.src = this.pokemon[this.currentActivePokemonIndex].getSprite();
        this.DOMbodyPokemonName.innerText = this.pokemon[this.currentActivePokemonIndex].getName();
        this.DOMbodyPokemonMoves.innerText = this.pokemon[this.currentActivePokemonIndex].getMoves();
        this.DOMbodyPokemonPrevolution.innerText = this.pokemon[this.currentActivePokemonIndex].getPrevolution();
        this.DOMbodyPokemonEvolution.innerText = this.pokemon[this.currentActivePokemonIndex].getEvolution();
    }
    }
    drawDOMfooter() {
        this.DOMpdexControlPokemonSearchButton.innerText = 'search';
        this.DOMfooterText.innerText = `Everyone loves Bulba, that's why he is number one!`
    }
    getControls(){
        return this.DOMfooterPdexControlsContainer;
    }
}
