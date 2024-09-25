import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View className="flex-row justify-center items-center h-[100%] bg-slate-900">
      <ActivityIndicator size={"large"} color='orange' />
      <Text className='text-lg text-orange-300 font-bold'>&nbsp;&nbsp;Loading...</Text>
    </View>
  );
};
