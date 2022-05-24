# AJAX Pokédex

## Assign,ent Goals ##
- [x] Have a functional pokédex
    - [x] You can search for pokémon using name and/or ID
    - [x] The pokédex displays following information about the pokémon
        - [x] The ID
        - [x] An Image
        - [x] it's moveset [At least 4 moves]
        - [ ] It's prevolutions and evolutions
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
        - [x] The pokedex object has HTML so it can be displayed nicely on the page
        - [x] The pokedex has a spot to put the pokemon's sprite,name,moves

#### We now have a working Pokédex What's next ? ####
- [ ] Create a website where the user create their own pokédex
    - [ ] The pokédex can be opened and closed by the user.
    - [ ] The user can select up to 6 pokémon to add to his,or her party
    - [ ] The party is accessible, and modifiable outside of the pokédex!
- [ ] Increase the pokédex's functionality
    - [ ] Buttons where the user can iterate trough his previous searched pokémon
    - [ ] Make sure no new fetch happens whenever the user searches for the same pokémon twice
    - [ ] A button to see more details about the current pokémon
        - [ ] Type,strengths weaknesses base stats ?
- [ ] Make the pokédex more beatifull
    - [ ] Have small previews of the prevolutions and evolutions
        - [ ] These should be clickable to go straight to that pokémon
    - [ ] Change the pokédex pokemon container background based on the pokemon's type
    - [ ] Improve the layout of the displayed pokemon;
    - [ ] Have a pokemon dedicated footer text depending on the pokemon searched for;
- [ ] Some sort of pokémon battlesystem ? =()
- [ ] Cookies,cookies,cookies
    - [ ] Store the user's pokédex in a cookie so that they can keep their previous party/searches when they revisit ?
#### To Fix ####
- [ ] Prevolutions and evolutions don't always fetch properly;
- [ ] Pokémon with weird characters like '-' don't show in the pokédex;
