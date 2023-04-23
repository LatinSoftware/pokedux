import { Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsByName } from '../slices/dataSlice';


const SearchInput = () => {
    const { Search } = Input;
    const dispatch = useDispatch();

    const onSearch = (value) => {
        dispatch(getPokemonsByName(value))
    }

    return (
        <>
            <Search placeholder='Buscar...' style={{ marginBottom: 10 }} onSearch={onSearch} />
        </>
    )
}

export default SearchInput;