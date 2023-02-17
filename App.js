import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

import AuthNavigator from "./navigation/AuthNavigation";

import store from "./redux/store";
import { loadUser } from "./redux/userReducer";
import Index from "./index";

import CGDCContext from "./context/context";

export default function App() {
  const [posts, setPosts] = useState();
  return (
    <>
      <Provider store={store}>
        <CGDCContext.Provider value={{ posts, setPosts }}>
          <Index />
        </CGDCContext.Provider>
      </Provider>
    </>
  );
}
