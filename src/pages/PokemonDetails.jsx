import React, { useEffect, useState } from 'react';
import PokemonInfo from '../components/PokemonInfo';
import PokemonEvoTree from '../components/PokeEvoTree';
import '../assets/styles/pokedetails.css';
import { getPokemonSpecies } from '../utils/fetchPokemon';
import SearchBar from '../components/SearchBar';

const PokemonDetails = ({ activePokemon, searchTerm, setSearchTerm }) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPokemon = async () => {
        try {
            const pokemonData = await getPokemonSpecies(activePokemon);
            setPokemon(pokemonData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (activePokemon) {
            setLoading(true);
            getPokemon();
        }
    }, [activePokemon]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='pokemon-details'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='layout'>
                {pokemon && <PokemonInfo pokemonSpecie={pokemon} />}
                {pokemon && <PokemonEvoTree evoTree={pokemon.evolution_chain} />}
            </div>
        </div>
    );
};

export default PokemonDetails;