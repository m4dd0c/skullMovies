import React from "react";
import { View, Dimensions, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { MovieCard } from "./MovieCard";
import { Loader } from "./Loader";
import { MOVIES } from "../constants/constant";

export const TrendingCarousel = ({ data }) => {
  const { width } = Dimensions.get("window");
  return data === null ? (
    <Loader />
  ) : (
    <View>
      <Text className="font-semibold text-orange-300 py-3 px-5 text-xl">
        Trending
      </Text>
      <Carousel
        data={data !== null ? data : MOVIES}
        renderItem={(item) => <MovieCard data={item} type={"trending"} />}
        firstItem={1}
        inactiveSlideOpacity={0.4}
        sliderWidth={width}
        itemWidth={width * 0.72}
        windowSize={2}
      />
    </View>
  );
};
