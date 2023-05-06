import { View, Text } from "react-native";
import React from "react";
import { PlusCircleIcon } from "react-native-heroicons/outline";

const FilterCard = () => {
  return (
    <View className="px-8 mt-4">
      <View className="flex-row justify-around items-center border rounded-lg py-3">
        <Text className="text-[#2e2f55] text-lg font-bold">Type</Text>
        <Text>
          (Normal +
          <Text className="text-[#2e2f55] text-lg font-bold">5 More)</Text>
        </Text>
        <PlusCircleIcon color="#2e2f55" size={30}/>
      </View>
      <View></View>
    </View>
  );
};

export default FilterCard;
