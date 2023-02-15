import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import color from "../assets/colors/color";

import CGDCScreen from "../screens/CGDCScreen";
import CreateCDGCPostScreen from "../screens/CreateCDGCPostScreen";

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
      options={{}}
    />
  </Stack.Navigator>
);

export default CGDCNavigator;
