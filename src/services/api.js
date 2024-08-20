// api.js

const API_URL = 'https://pokeapi.co/api/v2/';
// Function to fetch all contacts
async function fetchPokemons(offset = 0, limit = 20) {
    try {
        const response = await fetch(`${API_URL}pokemon/?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching contacts:', error);
        throw error;
    }
}

// Function to fetch a single pokemon by ID or Name
async function fetchPokemonById(id) {
    try {
        const response = await fetch(`${API_URL}pokemon/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching contact with ID ${id}:`, error);
        throw error;
    }
}

// Function to fetch a single pokemon specie by ID or Name
async function fetchPokemonSpecie(id) {
    try {
        const response = await fetch(`${API_URL}pokemon-species/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching contact with ID ${id}:`, error);
        throw error;
    }
}

// Function to fetch a single pokemon specie by ID or Name
async function fetchPokemonEvoChain(evolution_chain) {
    try {
        const response = await fetch(`${evolution_chain}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export { fetchPokemons, fetchPokemonById, fetchPokemonSpecie, fetchPokemonEvoChain };