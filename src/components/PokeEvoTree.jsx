import React, { useEffect, useState } from 'react';
import { getPokemonEvotree } from '../utils/fetchPokemon';

const PokemonEvoTree = ({ evoTree }) => {
    const [evolutionChain, setEvolutionChain] = useState([]);
    const [loading, setLoading] = useState(true);

    const getEvolutionChain = async () => {
        try {
            console.log(evoTree.url);
            const evolutionChain = await getPokemonEvotree(evoTree.url);
            setEvolutionChain(evolutionChain);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (evoTree) {
            setLoading(true);
            getEvolutionChain();
        }
    }, [evoTree]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h3>Evolution Chain</h3>
            <div>
                {
                    evolutionChain.map((pokemon, index) => (
                        <div key={index}>
                            <img src={pokemon.image} alt={pokemon.name} width={64} height={64} />
                            <span>{pokemon.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PokemonEvoTree;