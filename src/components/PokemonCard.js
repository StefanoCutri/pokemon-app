import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            pokemon: pokemon,
          })
        }
        className={
          "bg-[#dfedee] justify-center items-center mr-3 p-4 pr-4 rounded w-44"
        }
        style={{
          borderStyle: "dashed",
          borderWidth: 1.5,
        }}
      >
        <View className="mb-2 rounded-lg justify-center items-center">
          <SvgUri width="150" height="150" uri={pokemon.imageUrl} />
          <Text className="text-lg font-bold mt-4 text-[#2e2f55]">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Text>
          <Text className="text-lg text-[#2e2f55]">{pokemon.id}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PokemonCard;
