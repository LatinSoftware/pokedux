export const logger = (store) => (next) => (action) => {
    // next manda del action al reducer
    console.log("logget md",action);
    next(action);
}

export const featuring = (store) => (next) => (action) => {
    const featured = [{ name: 'eddie' }, ...action.action.payload];
    const updatedAction = {
        ...action, 
        action: { ...action.action, payload: featured }
    }
    next(updatedAction);
}

export const pokeNaming = (store) => (next) => (action) => {
    const prefix = action.action.payload.map(pokemon => ({
        ...pokemon,
        name: `Poke: ${pokemon.name}`
    }))

    const updatedAction = {
        ...action, 
        action: { ...action.action, payload: prefix }
    }
    next(updatedAction);
}