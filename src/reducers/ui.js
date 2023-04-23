import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types"

const initialState = fromJS({
    loading: false
})

export const uiReducer = (state = initialState, action ) => {
    
    switch(action.type)
    {
        case SET_LOADING:
            // return {
            //     ...state,
            //     loading: action.payload
            // }
            return state.set('loading', action.payload)
        default:
            return state;
    }  
}

