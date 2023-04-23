import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api/pokemon";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
    pokemonsAll: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        console.log("searching");
        dispatch(setLoading(true))
        const pokemons = await getPokemons();
        const pokemonsDetails = await Promise.all(
            pokemons.map(d => getPokemonDetails(d.name)
        ));

        dispatch(setPokemons(pokemonsDetails));
        dispatch(setLoading(false))
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            console.log("setPokemons");
            state.pokemons = action.payload;
            state.pokemonsAll = action.payload;
        },
        setFavorite: (state, action) => {
            const pokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.pokemonId);
            if (pokemonIndex >= 0) {
                const isFavorite = state.pokemons[pokemonIndex].isFavorite;
                state.pokemons[pokemonIndex].isFavorite = !isFavorite;
            }
        },
        getPokemonsByName: (state, action) => {
            const pokemonFiltered =  state.pokemonsAll.filter(pokemon => pokemon.name.includes(action.payload));
            console.log("pokemonFiltered", pokemonFiltered)
            state.pokemons = pokemonFiltered;
            console.log("state", state)
        }
    }
})

export const { setPokemons, setFavorite, getPokemonsByName } = dataSlice.actions;


export default dataSlice.reducer;