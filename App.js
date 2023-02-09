import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import AuthNavigator from "./navigation/AuthNavigation";

import store from "./redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}
