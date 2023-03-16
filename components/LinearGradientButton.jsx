import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import color from "../assets/colors/color";

export default function LinearGradientButton({ title, onPress, disabled }) {
  return (
    <LinearGradient
      style={styles.button}
      colors={[color.primary, color.secondary]}
      start={[0.2, 0.5]}
    >
      <Text style={styles.buttonName} disabled={disabled} onPress={onPress}>
        {title}
      </Text>
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
