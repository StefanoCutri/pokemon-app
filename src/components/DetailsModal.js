import { View, Text } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { XCircleIcon } from "react-native-heroicons/outline";

const DetailsModal = ({ isModalVisible, toggleModal, details }) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View className="flex-col items-end bg-[#2e2f55] h-90 rounded-lg relative">
          <View className="mt-4 mr-5">
            <XCircleIcon size={30} color="white" onPress={toggleModal} />
          </View>
          <Text className="text-white text-sm p-4">{details}</Text>
        </View>
      </Modal>
    </View>
  );
};

export default DetailsModal;
