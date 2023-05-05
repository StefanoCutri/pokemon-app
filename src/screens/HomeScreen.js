import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#dfedee] ">
      <View className="ml-6 mt-4">
      <Text className="text-blue-950 text-4xl font-bold">Pokédex</Text>
      <Text className="text-blue-950 text-lg ">Search for any Pokémon that exists on the planet</Text>
      </View>

      <View className="flex-row justify-between items-center p-5">
        <TextInput className="bg-[#cadde2] p-5 w-64 rounded-lg" placeholder="Name or Number" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
