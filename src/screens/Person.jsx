import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import fallback from "../../assets/images/person.png";
import dayjs from "dayjs";
import { MovieCarousel } from "../components/MovieCarousel";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { Loader } from "../components/Loader";
import { IMG_URL } from "../constants/constant";
import { useFetch } from "../api/api";
export const Person = ({ navigation, route }) => {
  const sex = (num) => {
    if (num === 1) {
      return "Female";
    } else if (num === 2) {
      return "Male";
    } else if (num === 0) {
      return "Unknown";
    } else {
      return "Non-Binary";
    }
  };

  const [loading, setLoading] = useState(true);
  const [castMovies, setCastMovies] = useState(null);
  const [data, setData] = useState(null);

  const callings = async () => {
    const { params: cast_id } = route;
    setData(await useFetch(`/person/${cast_id}`));
    const movies = await useFetch(`/person/${cast_id}/movie_credits`);
    setCastMovies(movies.cast);
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
      <SafeAreaView className="w-screen">
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute z-30 bg-orange-300 m-3 p-1 rounded-lg"
          >
            <ChevronLeftIcon size="30" color={"white"} />
          </TouchableOpacity>
          <View style={{ height: 300 }} className="my-10 mt-20">
            <View
              style={{ height: 300, width: 300 }}
              className="shadow-2xl overflow-hidden shadow-slate-50 bg-slate-900 rounded-full mx-auto"
            >
              <Image
                source={
                  data && data?.profile_path
                    ? { uri: IMG_URL + data?.profile_path }
                    : fallback
                }
                style={{ height: 300, width: 300 }}
              />
            </View>
          </View>
          <Text className="text-orange-300 text-center font-bold text-5xl">
            {data?.name}
          </Text>
          <View
            className=" flex-row items-center justify-evenly my-5 bg-slate-800 h-20 mx-auto rounded-full"
            style={{ width: "90%" }}
          >
            <View className="border-r-2 border-r-white pr-2">
              <Text className="text-white font-bold text-lg text-center">
                Gender
              </Text>
              <Text className="text-slate-300 font-bold text-md text-center">
                {sex(data?.gender)}
              </Text>
            </View>
            <View className="border-r-2 border-r-white pr-2">
              <Text className="text-white font-bold text-lg text-center">
                Birthday
              </Text>
              <Text className="text-slate-300 font-bold text-md text-center">
                {data && dayjs(data?.birthday).format("MMMM DD, YYYY")}
              </Text>
            </View>
            <View className="border-r-2 border-r-white pr-2">
              <Text className="text-white font-bold text-lg text-center">
                Known For
              </Text>
              <Text className="text-slate-300 font-bold text-md text-center px-1">
                {data?.known_for_department}
              </Text>
            </View>
            <View>
              <Text className="text-white font-bold text-lg text-center">
                Popularity
              </Text>
              <Text className="text-slate-300 font-bold text-md text-center">
                {data?.popularity?.toFixed(1)}
              </Text>
            </View>
          </View>
          <View className="mx-5">
            <Text className="text-white">{data?.biography}</Text>
          </View>
          <View className="mb-20 mx-2">
            <Text className="text-xl text-orange-300 p-5">
              {data?.name}'s Movies
            </Text>
            {!loading && <MovieCarousel data={castMovies} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
