import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { XCircleIcon } from "react-native-heroicons/outline";
import { SvgUri } from "react-native-svg";
import Modal from "react-native-modal";
import { Button } from "react-native";

const PokemonsDetailsView = () => {
  const {
    params: { pokemon },
  } = useRoute();

  const [text, setText] = useState(pokemon.details.slice(0, 70));
  const [readMore, setReadMore] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-[#dfedee] flex-1">
      <ScrollView>
        {/* Header */}
        <View className="flex-row pl-10 pr-10 justify-center items-center mt-6">
          <View className="flex-1 justify-center">
            <Text className="font-extrabold text-[#2e2f55] text-2xl">
              {pokemon.name.toUpperCase()}
            </Text>
            <Text className="text-[#2e2f55]">{pokemon.id}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <XCircleIcon size={50} color="#2e2f55" />
          </TouchableOpacity>
        </View>
        {/* Info */}
        <View className="flex-row justify-around my-8">
          <View
            className="mb-2 rounded-lg justify-center items-center"
            style={{
              borderStyle: "dashed",
              borderWidth: 1.5,
              width: "50%",
              height: 250,
            }}
          >
            <SvgUri width="150" height="150" uri={pokemon.imageUrl} />
          </View>
          <Text className="text-[#2e2f55] text-2xl w-40">
            {" "}
            {text}
            {!readMore && "..."}
            <Text className="font-bold" onPress={toggleModal}>
              {readMore ? "Show less" : "Read more"}
            </Text>
            {/* Modal */}
            <View>
              <Modal isVisible={isModalVisible}>
                <View className="flex-col items-end bg-[#2e2f55] h-90 rounded-lg relative">
                  <View className="mt-4 mr-5">
                    <XCircleIcon
                      size={30}
                      color="white"
                      onPress={toggleModal}
                    />
                  </View>
                  <Text className="text-white text-sm p-4">
                    {pokemon.details}
                  </Text>
                </View>
              </Modal>
            </View>
          </Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default PokemonsDetailsView;
