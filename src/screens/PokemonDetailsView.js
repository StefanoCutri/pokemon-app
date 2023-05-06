import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import { SvgUri } from "react-native-svg";
import Modal from "react-native-modal";
import DetailsModal from "../components/DetailsModal";

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
        {/* Image and Desc */}
        <View className="flex-row justify-around my-8 ml-5">
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
          </Text>

          {/* Modal */}
          <DetailsModal
            details={pokemon.details}
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
          />
        </View>
        {/* Pokemon Info */}
        {/* Heigh and Weight */}
        <View className="flex-row justify-around px-6">
          <View>
            <View className="mb-4">
              <Text className="font-bold text-[#2e2f55]">Hieght</Text>
              <Text className="text-[#2e2f55]">{pokemon.height}</Text>
            </View>
            <View className="mb-4">
              <Text className="font-bold text-[#2e2f55]">Weight</Text>
              <Text className="text-[#2e2f55]">{pokemon.weight} Kg</Text>
            </View>
            <View>
              <Text className="font-bold text-[#2e2f55]">Abilities</Text>
              <View className="flex-row">
                {pokemon.abilities.map((a) => (
                  <Text key={a} className="text-[#2e2f55] pr-1">
                    {a.charAt(0).toUpperCase() + a.slice(1)}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          <View>
            <View className="mb-4">
              <Text className="font-bold text-[#2e2f55]">Weight</Text>
              <Text className="text-[#2e2f55]">{pokemon.weight} Kg</Text>
            </View>
            <View className="mb-4">
              <Text className="font-bold text-[#2e2f55]">Egg Groups</Text>
              <View className="flex-row">
                {pokemon["egg group"].map((g) => (
                  <Text key={g} className="text-[#2e2f55] pr-1">
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </Text>
                ))}
              </View>
            </View>
            <View>
              <Text className="font-bold text-[#2e2f55]">Types</Text>
              <View className="flex-row">
                {pokemon.type.map((t) => (
                  <Text key={t} className="text-[#2e2f55] pr-1">
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View className="px-8 mt-5">
          <Text className="font-bold text-[#2e2f55]">Weak Against</Text>
          <View className="flex-row">
            {pokemon.weakness.map((w) => (
              <Text key={w} className="text-[#2e2f55] pr-1">
                {w.charAt(0).toUpperCase() + w.slice(1)},
              </Text>
            ))}
          </View>
        </View>
        {/* Stats */}
        <View className="flex-1 bg-[#afd2d2] mt-8 pl-10 py-10">
          <Text className="font-bold text-[#2e2f55] pl-3 pb-2 text-2xl">
            Stats
          </Text>
          <View className="flex-row justify-between px-4 mb-2">
            <Text className="text-[#2e2f55]">HP</Text>
            <View>
              <Progress.Bar
                unfilledColor="#93b2b3"
                progress={pokemon.stats.HP / 200}
                width={200}
                borderRadius={0}
                height={12}
                color="#2e2f55"
              />
            </View>
          </View>
          <View className="flex-row justify-between px-4 mb-2">
            <Text className="text-[#2e2f55]">Attack</Text>
            <View>
              <Progress.Bar
                unfilledColor="#93b2b3"
                progress={pokemon.stats.Attack / 200}
                width={200}
                borderRadius={0}
                height={12}
                color="#2e2f55"
              />
            </View>
          </View>
          <View className="flex-row justify-between px-4 mb-2">
            <Text className="text-[#2e2f55]">Defense</Text>
            <View>
              <Progress.Bar
                unfilledColor="#93b2b3"
                progress={pokemon.stats.Defense / 200}
                width={200}
                borderRadius={0}
                height={12}
                color="#2e2f55"
              />
            </View>
          </View>
          <View className="flex-row justify-between px-4 mb-2">
            <Text className="text-[#2e2f55]">Speed</Text>
            <View>
              <Progress.Bar
                unfilledColor="#93b2b3"
                progress={pokemon.stats.Speed / 200}
                width={200}
                borderRadius={0}
                height={12}
                color="#2e2f55"
              />
            </View>
          </View>
          <View className="flex-row justify-between px-4 mb-2">
            <Text className="text-[#2e2f55]">Sp. Attack.</Text>
            <View>
              <Progress.Bar
                unfilledColor="#93b2b3"
                progress={pokemon.stats["Special Attack"] / 200}
                width={200}
                borderRadius={0}
                height={12}
                color="#2e2f55"
              />
            </View>
          </View>
        </View>
        <View className="px-6 pt-12">
          <Text className="text-[#2e2f55] text-2xl font-bold mb-5">
            Evolution Chain
          </Text>
          <View className="flex-row justify-around items-center">
            {pokemon["evaluation chain"].map((image, i) => (
              <View key={i} className="flex-row items-center">
                <View
                  className="border rounded-lg px-4 h-40 justify-center items-center"
                  key={image}
                  style={{
                    borderStyle: "dashed",
                    borderWidth: 1.5,
                  }}
                >
                  <SvgUri width="65" height="75" uri={image} />
                </View>
                {i < 2 && <ArrowRightIcon key={i} size={30} color="#2e2f55" />}
              </View>
            ))}
          </View>
        </View>
        <View
          className="flex-1 mt-14 pb-8 flex-row
        justify-around"
        >
          <TouchableOpacity className="bg-[#2e2f55] px-5 rounded-lg flex-row justify-between items-center py-4">
            <ArrowLeftIcon color="white" />
            <Text className="text-white font-bold mx-5">Charmeleo</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2e2f55] px-5 rounded-lg flex-row justify-between items-center py-4">
            <Text className="text-white font-bold mx-5">Squirtle</Text>
            <ArrowRightIcon color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PokemonsDetailsView;
