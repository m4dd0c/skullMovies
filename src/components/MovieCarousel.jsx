import React from "react";
import { View, ScrollView } from "react-native";
import { MovieCard } from "./MovieCard";

export const MovieCarousel = ({ data }) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data &&
          data?.map((item) => (
            <MovieCard key={item.id} data={item} type={"other"} />
          ))}
      </ScrollView>
    </View>
  );
};
