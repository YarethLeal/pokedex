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

/*Format of pokemon data for detail page */
export function pokeSpecieData(pokemon) {
    try {
        for (let i = 0; i < pokemon.genera.length; i++) {
            if (pokemon.genera[i].language.name === 'en') {
                pokemon.genera = pokemon.genera[i].genus;
                break;
            }
        }

        var egg_group = [];
        for (let i = 0; i < pokemon.egg_groups.length; i++) {
            egg_group.push(pokemon.egg_groups[i].name);
        }
        pokemon.egg_groups = egg_group.join(', ');

        return {
            name: pokemon.name,
            egg_group: pokemon.egg_groups,
            evolution_chain: pokemon.evolution_chain,
            genera: pokemon.genera,
        };
    } catch (error) {
        console.error('Error formatting pokemon data:', error);
        return null;
    }
}
/*Format of pokemon data for detail page */
export function pokeData(pokemon) {
    try {
        let weight = pokemon.weight / 10;
        weight = (weight*2.2046).toFixed(1) + ' kg';

        let height = pokemon.height / 10;
        let feet = height * 3.2808;
        let inches = (feet - Math.floor(feet)) * 12;
        height = Math.floor(feet) + "'" + Math.round(inches) + '"';

        let abilities = [];
        for (let i = 0; i < pokemon.abilities.length; i++) {
            abilities.push(pokemon.abilities[i].ability.name);
        }
        abilities = abilities.join(', ');

        let types = [];
        for (let i = 0; i < pokemon.types.length; i++) {
            types.push(pokemon.types[i].type.name);
        }
        types = types.join(', ');
        return {
            "name": pokemon.name,
            "weight": weight,
            "height": height,
            "abilities": abilities,
            "types": types,
            "image": pokemon.sprites.versions["generation-viii"].icons.front_default,
        };
    } catch (error) {
        console.error('Error formatting pokemon data:', error);
        return null;
    }
}