import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  StatusBar,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { MovieCard } from "../components/MovieCard";
import { LinearGradient } from "expo-linear-gradient";
import { debounce } from "lodash";
import { Loader } from "../components/Loader";
import { useFetch } from "../api/api";

export const Search = ({ navigation }) => {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (query && query.trim().length > 2) {
      setLoading(true);
      const { results } = await useFetch(
        `/search/movie?query=${query}&include_adult=false`
      );
      setSearch(results);
    }
    setLoading(false);
  };
  const debounceCallback = useCallback(debounce(handleSearch, 400), []);
  return (
    <View className={`flex-1 bg-slate-950`}>
      <StatusBar backgroundColor="#030712" style="light" />
      <SafeAreaView>
        <View className="relative z-10 bg-slate-950 h-10 mb-7">
          <LinearGradient
            colors={["rgba(3,7,18,1)", "rgba(3, 7, 18, 0.5)", "transparent"]}
            className="h-16 left-0 right-0 top-16 absolute"
          />
          <TextInput
            placeholder="Search Movies"
            placeholderTextColor="rgba(255,255,255,0.5)"
            onChangeText={debounceCallback}
            className="absolute right-0 left-0 top-5 mx-4 py-4 pl-7 text-xl text-orange-300 font-semibold tracking-wider bg-slate-900 rounded-full"
          />
          <TouchableOpacity
            className="absolute right-4 bg-slate-800 top-5 rounded-full p-3.5"
            onPress={() => navigation.navigate("home")}
          >
            <XMarkIcon size="30" color="rgba(253,186,116, 0.7)" />
          </TouchableOpacity>
        </View>
        {loading ? (
          <Loader />
        ) : search?.length > 0 ? (
          <ScrollView className="mb-16">
            <View className="ml-5 mt-10">
              <Text className="text-white font-bold">
                results({search?.length})
              </Text>
            </View>
            <View className="flex-row my-5 justify-center flex-wrap">
              {search.map((item) => (
                <MovieCard key={item?.id} data={item} type={"search"} />
              ))}
            </View>
          </ScrollView>
        ) : (
          <View className="mt-40">
            <Image
              source={require("../../assets/images/waiting.png")}
              className="h-96 w-96 mx-auto opacity-80"
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};
