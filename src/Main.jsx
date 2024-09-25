import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { Search } from "./screens/Search";
import { Movie } from "./screens/Movie";
import { Person } from "./screens/Person";
const Stack = createNativeStackNavigator();
export const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="person" component={Person} />
        <Stack.Screen name="movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
