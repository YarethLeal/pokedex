import React, { useState, useEffect, useRef, useCallback } from 'react';
import SideBarItem from './SideBarItem';
import { getListPokemons, getInfoList } from '../utils/fetchPokemon';
import '../assets/styles/sidebar.css';

const SideBar = ({ activePokemon, setActive, searchTerm }) => {
    const [listPokemon, setListPokemon] = useState([]);
    const [nextRangeList, setRangeList] = useState("");
    const [loading, setLoading] = useState(true);
    const hasFetched = useRef(false); // Flag to prevent double fetching
    const offset = useRef(0); // Offset for fetching more Pokémon
    const sidebarRef = useRef(null); // Reference to the sidebar container

    const getPokemons = async (offsetValue = 0, limit = 20) => {
        try {
            const data = await getListPokemons(offsetValue, limit);
            setRangeList(data.next);
            const pokemons = await getInfoList(data.results);
            setListPokemon((prev) => [...prev, ...pokemons]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = useCallback(() => {
        if (sidebarRef.current) {
            const bottom = Math.ceil(sidebarRef.current.scrollTop + sidebarRef.current.clientHeight) >= sidebarRef.current.scrollHeight;
            if (bottom && !loading) {
                setLoading(true);
                offset.current += 20; // Increment the offset
                getPokemons(offset.current);
            }
        }
    }, [loading]);

    useEffect(() => {
        if (!hasFetched.current) {
            getPokemons();
            hasFetched.current = true;
        }
    }, []);

    useEffect(() => {
        const sidebar = sidebarRef.current;
        if (sidebar) {
            sidebar.addEventListener('scroll', handleScroll);
            return () => sidebar.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    const filteredPokemon = listPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading && listPokemon.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='sidebar' ref={sidebarRef}>
                <ul>
                    {filteredPokemon.map((pokemon) => {
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
                {loading && <div>Loading more...</div>}
            </div>
        </div>
    );
};

export default SideBar;