import React from "react";
import { View, StyleSheet, Text } from "react-native";

import color from "../assets/colors/color";
import TextInputComp from "../components/TextInput";

function OTPScreen(props) {
  return (
    <View style={styles.container}>
      <TextInputComp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.black,
  },
});

export default OTPScreen;
