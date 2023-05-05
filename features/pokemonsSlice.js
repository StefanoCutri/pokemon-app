import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonsList: [],
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemonsList: (state, action) => {
      state.pokemonsList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemonsList } = pokemonsSlice.actions;

export const selectPokemons = (state) => state.pokemons.pokemonsList;

export default pokemonsSlice.reducer;
