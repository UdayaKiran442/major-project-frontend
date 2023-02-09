import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

import AuthNavigator from "./navigation/AuthNavigation";

import store from "./redux/store";
import { loadUser } from "./redux/userReducer";
import Index from "./index";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider>
    </>
  );
}
