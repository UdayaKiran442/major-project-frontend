import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LinearGradientButton({ title }) {
  return (
    <LinearGradient
      style={styles.button}
      colors={["#ff172d", "#ff500b"]}
      start={[0.2, 0.5]}
    >
      <Text style={styles.buttonName}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonName: {
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 50,
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
  },
});
