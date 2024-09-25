import React from "react";
import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { img_sm } from "../constants/constant";
import fallback from "../../assets/images/person.png";
import { useNavigation } from "@react-navigation/native";
export const Casts = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push("person", data?.id)}
    >
      <View>
        <Image
          source={
            data && data?.profile_path
              ? { uri: img_sm(data?.profile_path) }
              : fallback
          }
          style={{ width: 120, height: 120 }}
          className="rounded-full mx-3"
        />
        <Text className="text-white font-bold text-center text-lg">
          {data?.original_name?.length > 14
            ? data?.original_name.slice(0, 14) + "..."
            : data?.original_name}
        </Text>
        <Text className="text-slate-300 font-bold text-center">
          {data?.character?.length > 14
            ? data?.character.slice(0, 14) + "..."
            : data?.character}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};