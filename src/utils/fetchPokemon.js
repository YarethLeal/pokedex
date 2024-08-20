import { fetchPokemons, fetchPokemonById, fetchPokemonSpecie, fetchPokemonEvoChain } from '../services/api.js';
import { pokeDataList, pokeSpecieData, pokeData } from './formatPokeData.js';

export async function getListPokemons(offset = 0, limit = 20) {
    return await fetchPokemons(offset, limit);
}

export async function getInfoList(pokemons) {
    const promises = pokemons.map(async (pokemon) => {
        const pokemonInfo = await fetchPokemonById(pokemon.name);
        return pokeDataList(pokemonInfo);
    });
    return Promise.all(promises);
}
export async function getPokemonInfo(pokemonId) {
    const pokemon = await fetchPokemonById(pokemonId);
    return pokeData(pokemon);
}
export async function getPokemonSpecies(pokemonId) {
    const pokemon = await fetchPokemonSpecie(pokemonId);
    return pokeSpecieData(pokemon);
}
export async function getPokemonEvotree(pokemonId) {
    const pokemon = await fetchPokemonById(pokemonId);
    return pokeDataList(pokemon);
}