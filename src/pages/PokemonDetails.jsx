import React, { useEffect } from 'react';
import PokemonInfo from '../components/PokemonInfo';
import PokemonEvoTree from '../components/PokeEvoTree';
import '../assets/styles/pokedetails.css';
import { getPokemonInfo } from '../utils/fetchPokemon';

const PokemonDetails = ({ activePokemon }) => {
    const getPokemon = async () => {
        try {
            const pokemon = await getPokemonInfo(activePokemon);
            document.title = `Pokemon - ${pokemon.name}`;
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getPokemon();
    }, [activePokemon]);
    return (
        <div className='pokemon-details'>
            <PokemonInfo />
            <hr />
            <PokemonEvoTree />
        </div>
    );
};

export default PokemonDetails;