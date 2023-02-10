import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import * as Yup from "yup";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

import LinearGradientButton from "../components/LinearGradientButton";
import TextInputComp from "../components/TextInput";
import color from "../assets/colors/color";

import { loginApi } from "../api/user";
import { getToken, setToken } from "../storage/storage";
import { loadUser } from "../redux/userReducer";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is requried")
    .min(6, "It must be minimum of 6 characters"),
});

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const disptch = useDispatch();

  // const form = new FormData();

  // form.append("email", email);
  // form.append("password", password);

  const loginHandler = async () => {
    try {
      // await validationSchema.validate({ email: email, password: password });
      const { success, results, message } = await (
        await loginApi(email, password)
      ).data;
      if (success) {
        alert(message);
        await SecureStore.setItemAsync("token", results);
        const user = jwtDecode(results);
        disptch(loadUser(user));
        const token = await SecureStore.getItemAsync("token");
        console.log("Token from secure storage:", token);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInputComp
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Enter your email"
        placeholderTextColor={color.white}
        boxWidth={300}
        onChangeText={(e) => {
          setEmail(e);
        }}
      />
      {error && <Text style={styles.error}>{error}</Text>}
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
      {error && <Text style={styles.error}>{error}</Text>}
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
  error: {
    color: color.danger,
    marginBottom: 10,
  },
  footer: {
    color: color.white,
    marginTop: 20,
    fontSize: 16,
  },
});
