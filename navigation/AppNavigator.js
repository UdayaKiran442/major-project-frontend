import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";

import color from "../assets/colors/color";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: color.primary,
          tabBarInactiveTintColor: color.white,
          tabBarActiveBackgroundColor: color.white,
          tabBarInactiveBackgroundColor: color.black,
          tabBarStyle: {
            backgroundColor: color.black,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
