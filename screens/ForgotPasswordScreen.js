import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import color from "../assets/colors/color";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const handleSubmit = () => {
    navigation.navigate("forgotPasswordOTP");
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
