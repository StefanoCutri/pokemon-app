import { View, Text, Image } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";

export default function PokemonCard({
  id,
  type,
  gender,
  image,
  stats,
  details,
  height,
  weight,
  abilities,
  weakness,
}) {
  return (
    <View>

      <Image
        resizeMode={"cover"}
        className="h-20 w-20"
        source={{
          uri: image,
        }}
      />
      <Text className="text-red-500">PokemonCard</Text>
    </View>
  );
}
