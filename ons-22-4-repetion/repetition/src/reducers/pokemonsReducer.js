const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POKEMONS":
      return action.payload;
    default:
      return state;
  }
}

export const addPokemons = (pokemons) => {
  return { type: "ADD_POKEMONS", payload: pokemons }
}

export default pokemonsReducer;