import React, { useEffect, useState } from 'react';
import { getPokemonInfo } from '../utils/fetchPokemon';

const PokemonInfo = ({ pokemonSpecie }) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const getPokemon = async () => {
        try {
            const pokemonData = await getPokemonInfo(pokemonSpecie.name);
            setPokemon(pokemonData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (pokemonSpecie) {
            setLoading(true);
            getPokemon();
        }
    }, [pokemonSpecie]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='pokemon-info'>
            <div>
                <div>
                    <img src={pokemon.image} alt={pokemon.name} width={64} height={64}/>
                </div>
                <div><h4>{pokemon.name}</h4></div>
                <div>
                    {
                        pokemon.types.split(',').map((type, index) => (
                            <span key={index}>{type}</span>
                        ))
                    }
                </div>
            </div>
            <div>
                <h3>Information</h3>
                <div>
                    <span>Weight: {pokemon.weight}</span>
                    <span>Height: {pokemon.height}</span>
                    <span>Species: {pokemonSpecie.genera}</span>
                    <span>Egg Groups: {pokemonSpecie.egg_group}</span>
                    <span>Abilities: {pokemon.abilities}</span>
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;