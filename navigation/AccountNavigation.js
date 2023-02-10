import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../screens/AccountScreen";

import colors from "../assets/colors/color";

const Stack = createNativeStackNavigator();

const AccountNavigation = () => (
  <Stack.Navigator initialRouteName="profile">
    <Stack.Screen
      name="profile"
      component={AccountScreen}
      options={{
        title: "Profile",
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTintColor: colors.secondary,
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 20,
        },
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigation;
