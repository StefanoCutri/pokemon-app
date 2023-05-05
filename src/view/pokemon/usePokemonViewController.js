import { useCallback, useEffect, useState } from "react";
import usePokemonViewModel from "../../viewmodel/usePokemonViewModel";

const usePokemonViewController = () => {
  const { pokemons, getPokemons } = usePokemonViewModel();

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return {
    pokemons,
  };
};

export default usePokemonViewController;
