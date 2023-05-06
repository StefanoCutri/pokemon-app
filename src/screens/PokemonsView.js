import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import PokemonCard from "../components/PokemonCard";
import usePokemonViewController from "../view/pokemon/usePokemonViewController";
import FiltersModal from "../components/FiltersModal";

const PokemonsView = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const { pokemons } = usePokemonViewController();
  return (
    <SafeAreaView className="flex-1 bg-[#dfedee]">
      <View className="ml-6 mt-[5%] divide-y">
        <Text className="text-[#2e2f55] text-4xl font-bold">Pokédex</Text>
        <Text className="text-[#2e2f55] text-lg ">
          Search for any Pokémon that exists on the planet
        </Text>
      </View>
      <View className=" flex-row items-center space-x-2 pb-2 mx-6">
        <View className="flex-row space-x-2 bg-[#cadde2] rounded-lg p-4 flex-1 my-6 justify-between">
          <TextInput
            placeholder="Name or Number"
            keyboardType="default"
            className="text-sm"
          />
          <MagnifyingGlassIcon size={30} color="#2e2f55" />
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <View className="bg-[#2e2f55] p-4 rounded-lg">
            <AdjustmentsHorizontalIcon color="white" />
          </View>
        </TouchableOpacity>
      </View>
      {/* Filters Modal */}
      <FiltersModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
      <View
        className="pb-36 ml-4"
        style={{
          alignItems: "center",
        }}
      >
        <FlatList
          data={pokemons}
          ItemSeparatorComponent={() => (
            <View style={{ height: 20, width: 20 }} />
          )}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default PokemonsView;
