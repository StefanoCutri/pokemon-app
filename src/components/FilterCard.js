import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import Checkbox from "expo-checkbox";
import { ScrollView } from "react-native";

const FilterCard = ({ filterName, isVisible, toggleVisible }) => {
  const [checkboxValue, setCheckboxValue] = React.useState([
    { label: "Normal", value: "normal", checked: false },
    { label: "Flying", value: "flying", checked: false },
    { label: "Ground", value: "ground", checked: false },
    { label: "Bug", value: "bug", checked: false },
    { label: "Steel", value: "steel", checked: false },
    { label: "Water", value: "water", checked: false },
    { label: "Electric", value: "electric", checked: false },
    { label: "Ice", value: "ice", checked: false },
    { label: "Dark", value: "dark", checked: false },
    { label: "Unknown", value: "unknown", checked: false },
    { label: "Fighting", value: "fighting", checked: false },
    { label: "Poison", value: "poison", checked: false },
    { label: "Rock", value: "rock", checked: false },
    { label: "Ghost", value: "ghost", checked: false },
    { label: "Fire", value: "fire", checked: false },
    { label: "Grass", value: "grass", checked: false },
    { label: "Psychic", value: "psychic", checked: false },
    { label: "Dragon", value: "dragon", checked: false },
    { label: "Fairy", value: "fairy", checked: false },
    { label: "Shadow", value: "shadow", checked: false },
  ]);

  const checkboxHandler = (value, index) => {
    const newValue = checkboxValue.map((checkbox, i) => {
      if (i !== index)
        return {
          ...checkbox,
          checked: false,
        };
      if (i === index) {
        const item = {
          ...checkbox,
          checked: !checkbox.checked,
        };
        return item;
      }
      return checkbox;
    });
    setCheckboxValue(newValue);
  };
  return (
    <View className="px-8 mt-4 border rounded-lg mx-2">
        <View className="flex-row justify-around items-center py-3">
          <Text className="text-[#2e2f55] text-lg font-bold">{filterName}</Text>
          <Text>
            (Normal +
            <Text className="text-[#2e2f55] text-lg font-bold">5 More)</Text>
          </Text>
          {isVisible[filterName] ? (
            <TouchableOpacity onPress={toggleVisible}>
              <MinusCircleIcon color="#2e2f55" size={30} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleVisible}>
              <PlusCircleIcon color="#2e2f55" size={30} />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{ display: isVisible[filterName] ? "flex" : "none" }}
          className="flex-row justify-around p-4"
        >
          <View className="flex flex-row flex-wrap">
            {checkboxValue.map((checkbox, i) => (
              <View key={i} className="flex-row p-2 px-2.5">
                <Checkbox
                  value={checkbox.checked}
                  onValueChange={(value) => checkboxHandler(value, i)}
                  color={checkbox.checked ? "#2e2f55" : undefined}
                />
                <Text>{checkbox.label}</Text>
              </View>
            ))}
          </View>
        </View>
    </View>
  );
};

export default FilterCard;
