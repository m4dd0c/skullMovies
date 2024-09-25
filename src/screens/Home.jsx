import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { TrendingCarousel } from "../components/TrendingCarousel.jsx";
import { MovieCarousel } from "../components/MovieCarousel";

import { Loader } from "../components/Loader";
import { useFetch } from "../api/api";

export const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [trending, setTrending] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [upcoming, setUpcoming] = useState(null);

  const callings = async () => {
    const { results } = await useFetch("/trending/movie/day");
    setTrending(results);
    const { results: topRatedMovies } = await useFetch("/movie/top_rated");
    setTopRated(topRatedMovies);
    const { results: upcomingMovies } = await useFetch("/movie/upcoming");
    setUpcoming(upcomingMovies);
  };

  useEffect(() => {
    setLoading(true);
    callings();
    setLoading(false);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <View className="flex-1 bg-slate-900 pb-16">
      <StatusBar backgroundColor="#030712" style="light" />
      <SafeAreaView>
        {/* header */}
        <View className="flex flex-row justify-between items-center bg-slate-950 px-5 py-2">
          <Image
            source={require("../../assets/images/skullmovie.png")}
            alt="loading..."
            style={{ height: 70, width: 70, objectFit: "cover" }}
          />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("search")}>
              <MagnifyingGlassIcon size="30" color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {/* actual Data */}
        <ScrollView>
          <View>
            {/* trending movies */}
            <TrendingCarousel data={trending} />
            {/* top rated movies */}
            {topRated && (
              <View className="mx-2">
                <Text className="text-xl text-orange-300 p-5">Top Rated</Text>
                <MovieCarousel data={topRated} />
              </View>
            )}
            {/* upcoming movies */}
            {upcoming && (
              <View className="mb-10 mx-2">
                <Text className="text-xl text-orange-300 p-5">UpComing</Text>
                <MovieCarousel data={upcoming} />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
