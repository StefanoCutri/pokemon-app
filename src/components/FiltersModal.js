import { View, Text } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { XCircleIcon } from "react-native-heroicons/outline";
import FilterCard from "./FilterCard";
import { TouchableOpacity } from "react-native";

const FiltersModal = ({ isModalVisible, toggleModal }) => {
  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View className="flex-col bg-white h-90 rounded-lg relative">
          <View className=" flex-row justify-between p-5">
            <Text className="text-[#2e2f55] text-3xl font-bold">Filters</Text>
            <XCircleIcon size={35} color="#2e2f55" onPress={toggleModal} />
          </View>

          <FilterCard />
          <FilterCard />
          <FilterCard />
          <View
          className="flex-row py-5 mt-20 justify-around items-center"
        >
          <TouchableOpacity className="bg-white px-5 rounded-lg flex-row justify-between items-center py-4 border">
            <Text className="text-[#2e2f55] font-bold mx-5">Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2e2f55] px-5 rounded-lg flex-row justify-between items-center py-4">
            <Text className="text-white font-bold mx-5">Apply</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </View>
  );
};

export default FiltersModal;
