import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

import LinearGradientButton from "../components/LinearGradientButton";
import color from "../assets/colors/color";
const SigninScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor={color.white}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        placeholderTextColor={color.white}
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
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: color.white,
    marginBottom: 20,
    color: color.white,
  },
  footer: {
    color: color.white,
    marginTop: 20,
    fontSize: 16,
  },
});
