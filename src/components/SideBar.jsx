import React, { useState, useEffect, useRef } from 'react';
import SideBarItem from './SideBarItem';
import { getListPokemons, getInfoList } from '../utils/fetchPokemon';
import '../assets/styles/sidebar.css';

const SideBar = ({ activePokemon, setActive }) => {
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
                <ul>
                    {listPokemon.map((pokemon) => {
                        const liClassName = pokemon.number === activePokemon ? 'active' : '';
                        return (
                            <li className={liClassName} key={pokemon.number} onClick={() => setActive(pokemon.number)}>
                                <SideBarItem
                                    image={pokemon.image}
                                    name={pokemon.name}
                                    number={pokemon.number}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;