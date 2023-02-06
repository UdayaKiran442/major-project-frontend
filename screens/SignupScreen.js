import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";

import color from "../assets/colors/color";

import * as Yup from "yup";

import FormData from "form-data";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is requried")
    .min(6, "It must be minimum of 6 characters"),
  name: Yup.string().required("Name is required"),
  enrollment: Yup.number("Enrollment number must contain only digits")
    .required("Enrollment number is required")
    .min(6, "Enrollment number must be a minimum of 6 digits")
    .max(6, "Enrollment number must be maximum of 6 digits"),
  phone: Yup.number()
    .required("Phone number is required")
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number mudt be of 10 digits"),
});

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [enrollment, setEnrollment] = useState();
  const [avatar, setAvatar] = useState();
  const [error, setError] = useState();

  const form = new FormData();
  form.append("name", name);
  form.append("email", email);
  form.append("password", password);
  form.append("phone", phone);
  form.append("enrollment", enrollment);
  form.append("avatar", avatar);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const submitForm = async () => {
    try {
      await validationSchema.validate({
        email,
        password,
        phone,
        enrollment,
        name,
      });
      console.log(form);
      navigation.navigate("otp");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}

      <TextInputComp
        value={name}
        autoCapitalize="words"
        placeholder="Enter your name"
        placeholderTextColor={color.white}
        boxWidth={300}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInputComp
        value={email}
        autoCapitalize="none"
        placeholder="Enter your email"
        placeholderTextColor={color.white}
        keyboardType="email-address"
        boxWidth={300}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInputComp
        value={phone}
        placeholder="Enter your phone number"
        placeholderTextColor={color.white}
        keyboardType="phone-pad"
        boxWidth={300}
        onChangeText={(text) => {
          setPhone(text);
        }}
      />
      <TextInputComp
        value={enrollment}
        placeholder="Enter your enrollment number"
        placeholderTextColor={color.white}
        keyboardType="phone-pad"
        boxWidth={300}
        onChangeText={(text) => {
          setEnrollment(text);
        }}
      />
      <TextInputComp
        value={password}
        placeholder="Enter your password"
        placeholderTextColor={color.white}
        secureTextEntry={true}
        boxWidth={300}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Text style={styles.image} onPress={selectImage}>
        Choose Profile image <MaterialCommunityIcons name="camera" size={25} />
      </Text>
      <TouchableOpacity>
        <LinearGradientButton title="Create Account" onPress={submitForm} />
      </TouchableOpacity>
      <Text style={styles.footer}>
        Have an account?
        <Text
          style={{ color: color.primary }}
          onPress={() => navigation.navigate("login")}
        >
          Sign in here
        </Text>
      </Text>
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
  image: {
    color: color.white,
    marginBottom: 20,
    fontSize: 20,
  },
  footer: {
    color: color.white,
    marginTop: 20,
    fontSize: 16,
  },
  error: {
    color: color.danger,
    marginBottom: 10,
  },
});
