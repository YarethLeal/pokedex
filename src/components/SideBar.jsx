import React, { useState, useEffect, useRef } from 'react';
import SideBarItem from './SideBarItem';
import { getListPokemons, getInfoList } from '../utils/fetchPokemon';
import '../assets/styles/sidebar.css';

const SideBar = () => {
    const [listPokemon, setListPokemon] = useState([]);
    const [nextRangeList, setRangeList] = useState("");

    const getPokemons = async (offset = 0, limit = 20) => {
        try {
            const data = await getListPokemons(offset, limit);
            setRangeList(data.next);
            const pokemons = await getInfoList(data.results);
            setListPokemon((prev) => [...prev, ...pokemons]);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getPokemons();
    }, []);
    return (
        <div>
            <div className='sidebar'>
                {listPokemon.map((pokemon) => {
                    console.log(pokemon);
                    return (
                        <SideBarItem
                            image={pokemon.image}
                            name={pokemon.name}
                            number={pokemon.number}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;