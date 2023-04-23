import React from 'react';
import PokeCard  from './PokeCard';

import './PokemonList.css'
const PokemonList = ({pokemons}) =>
{
    return (
        <div className='PokemonList'>
            {pokemons && pokemons.map((pokemon) => {
                return <PokeCard pokemon={pokemon} key={pokemon.name} />
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList;