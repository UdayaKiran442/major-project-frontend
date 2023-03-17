import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

import AuthNavigator from "./navigation/AuthNavigation";
import AppNavigator from "./navigation/AppNavigator";
import { loadUser } from "./redux/userReducer";

const Index = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const setLoggedInUser = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");
      const user = jwtDecode(token);
      console.log("Logged in user:", user);
      dispatch(loadUser(user));
    } catch (error) {
      console.log("Error in setting logged in user:", error.message);
    }
  };
  useEffect(() => {
    setLoggedInUser();
  }, []);
  return (
    <>
      <NavigationContainer>
        {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default Index;
