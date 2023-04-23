import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../api/pokemon";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload: payload
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload: payload
});

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonsDetails = await Promise.all(
        pokemons.map(d => getPokemonDetails(d.name))
    );

    dispatch(setPokemons(pokemonsDetails));
    dispatch(setLoading(false));
}