import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import color from "../assets/colors/color";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";
import { forgotPasswordApi } from "../api/user";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const handleSubmit = async () => {
    try {
      const response = await (await forgotPasswordApi(email)).data;
      if (response.success) {
        alert(response.message);
        navigation.navigate("forgotPasswordOTP", {
          userEmail: response.results,
        });
      } else {
        alert(response.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TextInputComp
        placeholder="Enter your email"
        boxWidth={350}
        placeholderTextColor={color.white}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <LinearGradientButton title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
