import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";
import color from "../assets/colors/color";

import FormData from "form-data";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [enrollment, setEnrollment] = useState();
  const [avatar, setAvatar] = useState();

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

  const submitForm = () => {
    navigation.navigate("otp");
    console.log(form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInputComp
        value={name}
        placeholder="Enter your name"
        placeholderTextColor={color.white}
        boxWidth={300}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInputComp
        value={email}
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
});
