import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../screens/AccountScreen";
import ChangePasswordScreen from "../screens/ChangePassworddScreen";

import colors from "../assets/colors/color";

import AuthNavigator from "./AuthNavigation";

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
    <Stack.Screen
      name="changePassword"
      component={ChangePasswordScreen}
      options={{
        title: "Change Password",
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
    <Stack.Screen
      name="AuthNavigator"
      component={AuthNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigation;
