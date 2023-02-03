import { View, StyleSheet } from "react-native";

import WelcomeScreen from "./screens/WelcomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
