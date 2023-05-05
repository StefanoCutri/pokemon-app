import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import pokeApi from "../../features/pokemonAxios";
import PokemonCard from "../components/PokemonCard";

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    pokeApi.get("/list-pokemon?offset=10&limit=20").then((data) => {
      setPokemons(data.data);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#dfedee]">
      <View className="ml-6 mt-[5%] divide-y">
        <Text className="text-[#2e2f55] text-4xl font-bold">
          Pokédex
        </Text>
        <Text className="text-[#2e2f55] text-lg ">
          Search for any Pokémon that exists on the planet
        </Text>
      </View>
      {/* Search */}
      <View className=" flex-row items-center space-x-2 pb-2 mx-6">
        <View className="flex-row space-x-2 bg-[#cadde2] rounded-lg p-4 flex-1 my-6 justify-between">
          <TextInput
            placeholder="Name or Number"
            keyboardType="default"
            className="text-sm"
          />
          <MagnifyingGlassIcon size={30} color="#2e2f55" />
        </View>
        <TouchableOpacity>
          <View className="bg-[#2e2f55] p-4 rounded-lg">
            <AdjustmentsHorizontalIcon color="white" />
          </View>
        </TouchableOpacity>
      </View>
      {/* Pokemons */}
      <View>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.imageUrl}
            type={pokemon.type}
            gender={pokemon.gender}
            stats={pokemon.stats}
            details={pokemon.details}
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
            weakness={pokemon.weakness}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
