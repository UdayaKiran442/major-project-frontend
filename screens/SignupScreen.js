import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import TextInputComp from "../components/TextInput";
import color from "../assets/colors/color";
import LinearGradientButton from "../components/LinearGradientButton";

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInputComp
        placeholder="Enter your name"
        placeholderTextColor={color.white}
      />
      <TextInputComp
        placeholder="Enter your email"
        placeholderTextColor={color.white}
        keyboardType="email-address"
      />
      <TextInputComp
        placeholder="Enter your phone number"
        placeholderTextColor={color.white}
        keyboardType="phone-pad"
      />
      <TextInputComp
        placeholder="Enter your enrollment number"
        placeholderTextColor={color.white}
        keyboardType="phone-pad"
      />
      <TextInputComp
        placeholder="Enter your password"
        placeholderTextColor={color.white}
        secureTextEntry={true}
      />
      <LinearGradientButton title="Create Account" />
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.black,
  },
});
