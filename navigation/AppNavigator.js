import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import HomeScreen from "../screens/HomeScreen";

import color from "../assets/colors/color";
import AccountNavigation from "./AccountNavigation";
import CGDCNavigator from "./CGDCNavigator";
import GatePassNavigation from "./GatePassNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
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
        {(user.role === "user" || user.role === "warden") && (
          <Tab.Screen
            name="GatePass"
            component={GatePassNavigation}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="gate" size={25} color={color} />
              ),
            }}
          />
        )}

        <Tab.Screen
          name="CGDC"
          component={CGDCNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="post" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountNavigation}
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
