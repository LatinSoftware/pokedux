import { Card } from 'antd';
import { useDispatch } from 'react-redux';

import Meta from 'antd/es/card/Meta';
import React from 'react';
import StarButton from './StarButton';
import { setFavorite } from '../slices/dataSlice';

const PokeCard = ({ pokemon }) => {

    const { name, sprites, types, isFavorite, id } = pokemon;
    const pokemonTypes = types?.map(type => type.type.name).join(", ")
    const dispatch = useDispatch();
    

    const handleOnClick = () => {
        dispatch(setFavorite({pokemonId: id}))
    }

    return (
        <Card hoverable
            title={pokemon.name}
            cover={<img alt={name} src={sprites?.front_default} />}
            extra={<StarButton isFavorite={isFavorite} onClick={handleOnClick} />}
        >
            <Meta description={pokemonTypes} />
        </Card>
    )
}

export default PokeCard;