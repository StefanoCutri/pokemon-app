import { useCallback, useEffect, useState } from "react";
import { getPokemonsApi } from "./api/pokemon";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredPokemons, selectPokemons, setPokemonsList,
} from "../../features/pokemonsSlice";

export const usePokemonModel = (query) => {
  const [pokemons, setPokemons] = useState([]);
  const dispatch = useDispatch();
  const getPokemons = useCallback(async () => {
    const pokemonsData = await getPokemonsApi();
    setPokemons(pokemonsData);
    dispatch(setPokemonsList(pokemons))
  }, []);



  return {
    pokemons,
    getPokemons,
  };
};
