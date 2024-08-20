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
        <div className='evo-tree'>
            <h3>Evolution Chart</h3>
            <div className='evo-chart'>
                {
                    evolutionChain.map((pokemon, index) => (
                        <React.Fragment key={index}>
                            <div className='grow'>
                                <img src={pokemon.image} alt={pokemon.name} width={128} height={128} />
                                <p>{pokemon.name}</p>
                            </div>
                            {index < evolutionChain.length - 1 && (
                                <div className='arrow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </div>
                            )}
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default PokemonEvoTree;