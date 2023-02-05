import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

import LinearGradientButton from "../components/LinearGradientButton";
import TextInputComp from "../components/TextInput";
import color from "../assets/colors/color";

import FormData from "form-data";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const form = new FormData();

  form.append("email", email);
  form.append("password", password);

  const loginHandler = () => {
    console.log(form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInputComp
        value={email}
        placeholder="Enter your email"
        placeholderTextColor={color.white}
        boxWidth={300}
        onChangeText={(e) => {
          setEmail(e);
        }}
      />
      <TextInputComp
        value={password}
        placeholder="Enter your password"
        placeholderTextColor={color.white}
        secureTextEntry={true}
        boxWidth={300}
        onChangeText={(p) => {
          setPassword(p);
        }}
      />
      <LinearGradientButton title="Login" onPress={loginHandler} />
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
