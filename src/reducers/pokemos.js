import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types"

const initialState = fromJS({
    pokemons: [],
})

export const pokemosReducer = (state = initialState, action ) => {
    
    switch(action.type)
    {
        case SET_POKEMONS:
            // return {
            //     ...state,
            //     pokemons: action.payload
            // };
            return state.setIn(['pokemons'],fromJS(action.payload))
        
        case SET_FAVORITE:
            // const newPokemons = [...state.pokemons] 

            // const pokemonIndex = state.findIndex(pokemon => pokemon.id === action.payload.pokemonId);
            const pokemonIndex = state.get('pokemons').findIndex(pokemon => pokemon.get('id') === action.payload.pokemonId);
            if(pokemonIndex < 0) return state;

            // newPokemons[pokemonIndex].isFavorite = !newPokemons[pokemonIndex].isFavorite;

            const isFavorite = state.getIn(['pokemons', pokemonIndex, 'isFavorite']);

            // return {
            //     ...state,
            //     pokemons: newPokemons
            // }

            return state.setIn(['pokemons', pokemonIndex, 'isFavorite'], !isFavorite);
        default:
            return state;
    }  
}

