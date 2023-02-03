import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

import LinearGradientButton from "../components/LinearGradientButton";
import TextInputComp from "../components/TextInput";
import color from "../assets/colors/color";
const SigninScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInputComp
        placeholder="Enter your email"
        placeholderTextColor={color.white}
      />
      <TextInputComp
        placeholder="Enter your password"
        placeholderTextColor={color.white}
        secureTextEntry={true}
      />
      <LinearGradientButton title="Login" />
      <Text style={styles.footer}>
        Don't have an account?
        <Text
          style={{ color: color.primary }}
          onPress={() => navigation.navigate("signup")}
        >
          Create Account here
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.black,
  },
  footer: {
    color: color.white,
    marginTop: 20,
    fontSize: 16,
  },
});
