// api.js

const API_URL = 'https://pokeapi.co/api/v2/';
// Function to fetch all contacts
async function fetchPokemons(offset = 0, limit = 20) {
    try {
        const response = await fetch(`${API_URL}pokemon/`);
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

export { fetchPokemons, fetchPokemonById };