import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GatePassScreen from "../screens/GatePassScreen";

import color from "../assets/colors/color";

const Stack = createNativeStackNavigator();

const GatePassNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="gatePass"
      component={GatePassScreen}
      options={{
        title: "Profile",
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
  </Stack.Navigator>
);

export default GatePassNavigation;
