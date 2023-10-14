import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { InitialScreenOnStart } from "./InitialScreenOnStart";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "MainTabNavigator" : "InitialScreenOnStart"}>
        {user ? (
          <Stack.Screen
            name="MainTabNavigator" // Updated screen name
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="InitialScreenOnStart"
            component={InitialScreenOnStart}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
