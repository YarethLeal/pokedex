import React, { useState } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const [isInputVisible, setInputVisible] = useState(false);

    const handleIconClick = () => {
        setInputVisible(!isInputVisible);
    };

    return (
        <div className='search'>
            <div className="search-bar">
                <div className='search-icon' onClick={handleIconClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#730909" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
                {isInputVisible && (
                    <div className='search-input'>
                        <input
                            type="text"
                            placeholder="Search Pokémon..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;