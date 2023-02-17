import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import color from "../assets/colors/color";

import CGDCScreen from "../screens/CGDCScreen";
import CreateCDGCPostScreen from "../screens/CreateCDGCPostScreen";
import UpdateCGDCPostScreen from "../screens/UpdateCGDCPostScreen";

const Stack = createNativeStackNavigator();

const CGDCNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="cgdcScreen"
      component={CGDCScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="createCGDCPost"
      component={CreateCDGCPostScreen}
      options={{
        title: "Create Post",
        headerStyle: {
          backgroundColor: color.black,
        },
        headerTintColor: color.secondary,
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 20,
        },
      }}
    />
    <Stack.Screen
      name="updateCGDCPost"
      component={UpdateCGDCPostScreen}
      options={{
        title: "Update Post",
        headerStyle: {
          backgroundColor: color.red,
        },
        headerTintColor: color.white,
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 20,
        },
      }}
    />
  </Stack.Navigator>
);

export default CGDCNavigator;
