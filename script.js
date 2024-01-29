  class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.types = data.types.map((type) => type.type.name);
        this.moves = data.moves.map((move) => move.move.name);
        this.sprites = {
            front_default: data.sprites.front_default
        };
        this.species = {
            url: data.species.url
        };
    }

    display() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Types: ${this.types.join(", ")}`);
        console.log(`Moves: ${this.moves.join(", ")}`);
        console.log(`Sprite: ${this.sprites.front_default}`);
        console.log(`Species URL: ${this.species.url}`);
    }
}

// const dataFromAPI = {
//     id: 25,
//     name: "pikachu",
//     types: [{ type: { name: "electric" } }],
//     moves: [
//         { move: { name: "thundershock" } },
//         { move: { name: "quick attack" } }
//     ],
//     sprites: {
//         front_default: "https://pokeapi.co/media/sprites/pokemon/25.png"
//     },
//     species: { url: "https://pokeapi.co/api/v2/pokemon-species/25/" }
// };

// const pikachu = new Pokemon(dataFromAPI);
// pikachu.display();

let pokemon = []; // store pokemon from the searches

// search for a given pokemon via the API
function searchPokemon() {
    const input = document.getElementById("pokemonName");
    const pokemonName = input.value.toLowerCase();

    if (!pokemonName) {
        alert("Please enter a Pokemon name or ID.");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Pokemon not found. Please try again.");
            }
            return response.json();
        })
        .then((data) => {
            fetchMoves(data.moves);
            fetchCompatibilityWithTMs(data.id);
            pokemon.push(new Pokemon(data));
            console.log(`From newly made pokemon ${pokemon[0].name}`);
            displayPokemon(data);
            fetchEvolutionChain(data.species.url);
        })
        .catch((error) => {
            console.error("Error fetching Pokemon data:", error);
            alert(error.message);
        });
}

function fetchEvolutionChain(speciesUrl) {
    fetch(speciesUrl)
        .then((response) => response.json())
        .then((speciesData) => {
            if (speciesData.evolution_chain) {
                fetch(speciesData.evolution_chain.url)
                    .then((response) => response.json())
                    .then((evolutionChainData) => {
                        displayEvolutionChain(evolutionChainData);
                    })
                    .catch((error) => {
                        console.error(
                            "Error fetching evolution chain data:",
                            error
                        );
                    });
            }
        })
        .catch((error) => {
            console.error("Error fetching species data:", error);
        });
}

function displayEvolutionChain(evolutionChainData) {
    const resultDiv = document.getElementById("result");
    if (!resultDiv) return;

    const evolutionDiv = document.createElement("div");
    evolutionDiv.classList.add("pokemon-details");
    evolutionDiv.style.color = "#e74c3c"; // set the eveolutions to pokemon red

    const evolutionTitle = document.createElement("p");
    evolutionTitle.classList.add("font-semibold");
    evolutionTitle.textContent = "Evolution Chain:";
    evolutionDiv.appendChild(evolutionTitle);

    evolutionChainData.chain.evolves_to.forEach((stage) => {
        const stageName = stage.species.name;
        const stageDetails = document.createElement("p");

        stageDetails.textContent = ucfirst(stageName);
        console.log("here is evolution data");
        console.log(evolutionChainData.chain.evolves_to);
        evolutionDiv.appendChild(stageDetails);
    });

    resultDiv.appendChild(evolutionDiv);
}

function fetchMoves(movesData) {
    // You can implement this function to fetch and display moves
}

function fetchCompatibilityWithTMs(pokemonId) {
    // You can implement this function to fetch and display compatibility with TMs
}

function displayPokemon(data) {
    const resultDiv = document.getElementById("result");
    if (!resultDiv) return;

    resultDiv.innerHTML = "";

    const pokemonImg = document.createElement("img");
    // get the shiny sprite from api
    pokemonImg.src = data.sprites.front_shiny;
    pokemonImg.classList.add("pokemon-img");
    resultDiv.appendChild(pokemonImg);

    const pokemonName = document.createElement("h2");
    pokemonName.textContent = ucfirst(data.name);
    pokemonName.classList.add("pokemon-name", "font-semibold");
    resultDiv.appendChild(pokemonName);

    const pokemonId = document.createElement("p");
    pokemonId.textContent = `ID: ${data.id}`;
    pokemonId.classList.add("pokemon-id");
    resultDiv.appendChild(pokemonId);

    const pokemonTypeDiv = document.createElement("div");
    pokemonTypeDiv.classList.add("pokemon-type");
    data.types.forEach((type) => {
        const typeElement = document.createElement("p");
        typeElement.textContent = ucfirst(type.type.name);
        pokemonTypeDiv.appendChild(typeElement);
    });
    resultDiv.appendChild(pokemonTypeDiv);
    //pokemon = []; // cleary the array of all results so it always only has the current search in it
}

function ucfirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// largest pokemon number is 1025 smallest is 1
function get_random_pokemon_number() {
    // * (max - min) + min
    return Math.floor(Math.random() * (1025 - 1) + 1);
}

document.addEventListener("DOMContentLoaded", () => {
    let i = document.createElement("img");
    i.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${get_random_pokemon_number()}.png`;
    console.warn(`The image source is ${i.src}`);
    document.querySelector("#nav_text").append(i);
});
