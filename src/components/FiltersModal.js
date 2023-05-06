import { View, Text } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { XCircleIcon } from "react-native-heroicons/outline";
import FilterCard from "./FilterCard";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const FiltersModal = ({ isModalVisible, toggleModal }) => {
  const [isFilterVisible, setIsFilterVisible] = useState({});
  const toggleVisible = (name) => {
    setIsFilterVisible({
      ...isFilterVisible,
      [name]: !isFilterVisible[name],
    });
  };
  const filtersType = ["Type", "Gender", "Stats"];
  return (
    <View>
      <ScrollView>
        <Modal isVisible={isModalVisible}>
          <View className="flex-col bg-white max-h-max rounded-lg relative">
            <View className=" flex-row justify-between p-5">
              <Text className="text-[#2e2f55] text-3xl font-bold">Filters</Text>
              <XCircleIcon size={35} color="#2e2f55" onPress={toggleModal} />
            </View>
            {filtersType.map((t) => (
              <View key={t}>
                <FilterCard
                  key={t}
                  isVisible={isFilterVisible}
                  toggleVisible={() => toggleVisible(t)}
                  filterName={t}
                />
              </View>
            ))}

            <View className="flex-row py-5 mt-20 justify-around items-center">
              <TouchableOpacity className="bg-white px-5 rounded-lg flex-row justify-between items-center py-4 border">
                <Text className="text-[#2e2f55] font-bold mx-5">Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#2e2f55] px-5 rounded-lg flex-row justify-between items-center py-4">
                <Text className="text-white font-bold mx-5">Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default FiltersModal;
