import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import TextInputComp from "../components/TextInput";
import color from "../assets/colors/color";
import LinearGradientButton from "../components/LinearGradientButton";

const SignupScreen = ({ navigation }) => {
  //   useEffect(() => {
  //     grantPermissions();
  //   });
  const grantPermissions = async () => {
    const { granted, status } =
      await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permissions to access library");
    }
  };
  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
  };
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
      <Text style={styles.image} onPress={selectImage}>
        Choose Profile image <MaterialCommunityIcons name="camera" size={25} />
      </Text>
      <TouchableOpacity>
        <LinearGradientButton title="Create Account" />
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
