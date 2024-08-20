import { fetchPokemons, fetchPokemonById, fetchPokemonSpecie, fetchPokemonEvoChain } from '../services/api.js';
import { PokemonFormats } from './formatPokeData.js';

export async function getListPokemons(offset = 0, limit = 20) {
    return await fetchPokemons(offset, limit);
}

export async function getInfoList(pokemons) {
    const promises = pokemons.map(async (pokemon) => {
        const pokemonInfo = await fetchPokemonById(pokemon.name);
        return PokemonFormats.prototype.pokeDataList(pokemonInfo);
    });
    return Promise.all(promises);
}
export async function getPokemonInfo(pokemonId) {
    const pokemon = await fetchPokemonById(pokemonId);
    return PokemonFormats.prototype.pokeData(pokemon);
}
export async function getPokemonSpecies(pokemonId) {
    const pokemon = await fetchPokemonSpecie(pokemonId);
    return PokemonFormats.prototype.pokeSpecieData(pokemon);
}
export async function getPokemonEvotree(url) {
    const evo_chain = await fetchPokemonEvoChain(url);

    if (!evo_chain) {
        throw new Error('Evolution chain data is not available');
    }

    let pokemons = PokemonFormats.prototype.pokeEvoChain(evo_chain);
    const promises = pokemons.map(async (pokemon) => {
        const pokemonInfo = await fetchPokemonById(pokemon.species_name);
        return PokemonFormats.prototype.pokeDataDetail(pokemonInfo);
    });
    return Promise.all(promises);
}