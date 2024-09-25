import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { img_md, img_sm } from "../constants/constant";
import fallback from "../../assets/images/fallback.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export const MovieCard = ({ data, type }) => {
  const [imgURI, setImgURI] = useState('../../assets/images/fallback.png');

  const navigator = useNavigation();
  const { width } = Dimensions.get("window");
  if (data && type === "trending") {
    data = data.item;
  }
  const handler = () => {
    navigator.push("movie", data?.id);
  };
  useEffect(() => {
    if (data) {
      setImgURI(
        type === "trending"
          ? img_md(data?.poster_path)
          : img_sm(data?.poster_path)
      );
    }
  }, [data]);
  return (
    <TouchableWithoutFeedback onPress={handler}>
      <View className="px-2 relative my-2">
        <Image
          source={
            data && data?.poster_path
              ? { uri: imgURI }
              : fallback
          }
          alt="loading..."
          height={type === "trending" ? 450 : 200}
          className="rounded-3xl "
          style={{ width: type !== "trending" ? width * 0.4 : "" }}
        />
        {type !== "trending" && (
          <View className="flex-row absolute bottom-2 space-x-10">
            <Text className="text-slate-300 ml-5 z-10 font-semibold">
              {data && data?.title}
            </Text>
            <LinearGradient
              style={{ width: width * 0.4, height: 50 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              className="absolute -bottom-2 -left-8 rounded-3xl"
              colors={[
                "transparent",
                "rgba(15, 23, 42, 0.3)",
                "rgba(15, 23, 42, 0.7)",
              ]}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
