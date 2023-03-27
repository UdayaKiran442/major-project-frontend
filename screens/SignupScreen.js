import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import * as FileSystem from "expo-file-system";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";
import SelectImageTextComoponent from "../components/SelectImageTextComoponent";

import color from "../assets/colors/color";

import { newUserApi, saveOTPApi, verifyOtpApi } from "../api/user";
import selectImage from "../utils/ImagePicker";
import uploadImage from "../utils/uploadImage";

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
  const [error, setError] = useState();
  const [publicId, setPublicId] = useState();
  const [secureUrl, setSecureUrl] = useState();

  const submitForm = async () => {
    try {
      // await validationSchema.validate({
      //   email,
      //   password,
      //   phone,
      //   name,
      // });
      const response = await (
        await newUserApi(name, email, password, phone, publicId, secureUrl)
      ).data;
      if (response.success) {
        const sendOTP = await (await saveOTPApi(response.results._id)).data;
        if (sendOTP.success) {
          alert(sendOTP.message);
          navigation.navigate("otp", {
            userId: response.results._id,
          });
        } else {
          alert("Error", response.error);
        }
      } else {
        alert("Error", response.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const uploadProfilePhoto = async () => {
    const results = await selectImage();
    const base64URI = await FileSystem.readAsStringAsync(results.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const { public_id, secure_url } = await uploadImage(base64URI);
    setPublicId(public_id);
    setSecureUrl(secure_url);
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
      {/* <TextInputComp
        value={enrollment}
        placeholder="Enter your enrollment number"
        placeholderTextColor={color.white}
        keyboardType="phone-pad"
        boxWidth={300}
        onChangeText={(text) => {
          setEnrollment(text);
        }}
      /> */}
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
      <SelectImageTextComoponent
        text="Upload profile photo"
        onPress={uploadProfilePhoto}
      />
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
