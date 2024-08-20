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
            <div className='pokemon-card'>
                <div>
                    <img src={pokemon.image} alt={pokemon.name} width={256} height={256} />
                </div>
                <div><h4>{pokemon.name}</h4></div>
                <div className='pokemon-types'>
                    {
                        pokemon.types.split(',').map((type, index) => (
                            <div className='capsule'>
                                <span className='capsule' key={index}>{type}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='information'>
                <h3>Information</h3>
                <div>
                    <p><strong>Weight:</strong> {pokemon.weight}</p>
                    <p><strong>Height:</strong> {pokemon.height}</p>
                    <p><strong>Species:</strong> {pokemonSpecie.genera}</p>
                    <p><strong>Egg Groups:</strong> {pokemonSpecie.egg_group}</p>
                    <p><strong>Abilities:</strong> {pokemon.abilities}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;