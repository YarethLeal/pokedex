import React, { useEffect, useState } from 'react';
import PokemonInfo from '../components/PokemonInfo';
import PokemonEvoTree from '../components/PokeEvoTree';
import '../assets/styles/pokedetails.css';
import { getPokemonSpecies } from '../utils/fetchPokemon';

const PokemonDetails = ({ activePokemon }) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPokemon = async () => {
        try {
            const pokemonData = await getPokemonSpecies(activePokemon);
            setPokemon(pokemonData);
            document.title = `Pokemon - ${pokemonData.name}`;
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
            {pokemon && <PokemonInfo pokemonSpecie={pokemon} />}
            <hr />
            {pokemon && <PokemonEvoTree evoTree={pokemon.evolution_chain} />}
        </div>
    );
};

export default PokemonDetails;