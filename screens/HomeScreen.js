import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import color from "../assets/colors/color";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
});
