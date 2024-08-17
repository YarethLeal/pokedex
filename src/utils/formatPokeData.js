/*Format of pokemon data for sidebar list */
export function pokeDataList(pokemon) {
    try {
        return {
            name: pokemon.name,
            image: pokemon.sprites.versions["generation-viii"].icons.front_default,
            number: pokemon.id
        };
    } catch (error) {
        console.error('Error formatting pokemon data:', error);
        return null;
    }
}