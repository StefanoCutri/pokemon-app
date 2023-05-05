import { usePokemonModel } from "../model/usePokemonModel";
import { useEffect } from "react";

const usePokemonViewModel = () => {
  const { pokemons, getPokemons } = usePokemonModel();

  return {
    pokemons,
    getPokemons,
  };
};

export default usePokemonViewModel;
