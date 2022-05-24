# AJAX Pokédex

## Goals ##
- [ ] Have a functional pokédex
    - [ ] You can search for pokémon using name and/or ID
    - [ ] The pokédex displays following information about the pokémon
        - [ ] The ID
        - [ ] An Image
        - [ ] it's moveset [At least 4 moves]
        - [ ] It's prevolutions and evolutions
- [ ] A website that looks like a pokédex to house the pokédex

## Stretch Goals ##
- [ ] Handle Ditto properly -> Only has 1 move
- [ ] Handle Eevee properly -> Has 6 evolutions!

### Roadmap ###
- [x] Get the required pokemon on the page
    - [x] Create a Pokemon Class
    - [x] Create a new pokemon object with the fetched data
    - [x] Have a method to render the data into HTML
        - [x] Image, alt tag
        - [x] Name
        - [x] 4 moves, preferably a random selection
        - [x] Evolutions,prevolutions
    - [x] Have a method to get the HTML so it can be appended
    - [ ] Make it look nice
- [x] Have a pokedex to display the pokemon
    -[x] Create a Pokedex class
        - [x] The pokedex accepts pokemon
        - [x] The pokedex stores pokemons that have been looked for
        - [ ] The pokedex object has HTML so it can be displayed nicely on the page
        - [ ] The pokedex has a spot to put the pokemon's sprite,name,moves

##TOFIX
- Resizing Pokedex lets status lights go out of its container