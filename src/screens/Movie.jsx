import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import dayjs from "dayjs";
import { img_lg } from "../constants/constant";
import fallback from "../../assets/images/fallback.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { Casts } from "../components/Casts";
import { MovieCarousel } from "../components/MovieCarousel";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { Loader } from "../components/Loader";
import { useFetch } from "../api/api";
export const Movie = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [cast, setCast] = useState(null);

  const callings = async () => {
    const { params: id } = route;
    setData(await useFetch(`/movie/${id}`));
    const { results } = await useFetch(`/movie/${id}/similar`);
    setSimilar(results);
    const { cast } = await useFetch(`/movie/${id}/credits`);
    setCast(cast);
  };

  useEffect(() => {
    setLoading(true);
    callings();
    setLoading(false);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <View className={`flex-1 bg-slate-900`}>
      <StatusBar backgroundColor="#030712" style="light" />
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute z-30 bg-orange-300 m-3 p-1 rounded-lg"
          >
            <ChevronLeftIcon size="30" color={"white"} />
          </TouchableOpacity>
          <View className="relative">
            <Image
              style={{ height: height * 0.7, width: "100%" }}
              source={
                data && data?.poster_path
                  ? { uri: img_lg(data?.poster_path) }
                  : fallback
              }
              alt="loading..."
            />
            <LinearGradient
              className="absolute bottom-0"
              colors={[
                "transparent",
                "rgba(15, 23, 42, 0.1)",
                "rgb(15, 23, 42)",
              ]}
              style={{ width, height: height * 0.25 }}
            />
          </View>
          <View className="px-5">
            <View className="flex-row justify-between">
              <Text className="text-orange-300 tracking-wide font-bold text-4xl">
                {data?.title}
              </Text>
              <Text className="text-white font-bold text-xl">
                {data?.vote_average?.toFixed(1)}&nbsp;⭐
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-white pl-2">{data?.tagline}</Text>
              <Text className="text-white pl-2 font-bold text-xl pr-1">
                {data?.runtime} min
              </Text>
            </View>
            <View className="flex-row py-3">
              {data?.genres?.map((item, index) => {
                const isLast = data.genres.length - index === 1;
                return (
                  <Text
                    key={index}
                    className="text-slate-300 font-bold text-lg"
                  >
                    &nbsp;{`${item.name} ${!isLast ? " • " : ""}`}
                  </Text>
                );
              })}
            </View>
            <View>
              {data?.status?.toLowerCase() === "released" && (
                <Text className="text-slate-300 font-bold">
                  {dayjs(data?.release_date).format("MMMM D, YYYY")}
                </Text>
              )}
            </View>
            <Text className="text-white py-3">{data?.overview}</Text>
          </View>
          {cast && (
            <View className="mb-5 mx-2">
              <Text className="text-xl text-orange-300 p-5">Casts</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {cast?.map((person) => (
                  <Casts key={person.id} data={person} />
                ))}
              </ScrollView>
            </View>
          )}
          {similar && (
            <View className="mb-14 mx-2">
              <Text className="text-xl text-orange-300 p-5">Similar</Text>
              <MovieCarousel data={similar} />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
