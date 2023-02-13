import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { resetForgotPasswordApi } from "../api/user";

import color from "../assets/colors/color";
import LinearGradientButton from "../components/LinearGradientButton";

import TextInputComp from "../components/TextInput";

const ResetForgotPasswordScreen = ({ route, navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user_email } = route.params;
  const handleSubmit = async () => {
    try {
      const response = await (
        await resetForgotPasswordApi(
          user_email,
          newPassword,
          confirmNewPassword
        )
      ).data;
      if (response.success) {
        alert(response.message);
        navigation.navigate("login");
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TextInputComp
        value={newPassword}
        placeholder="Enter your new password"
        placeholderTextColor={color.white}
        secureTextEntry={true}
        boxWidth={300}
        onChangeText={(text) => setNewPassword(text)}
      />
      <TextInputComp
        value={confirmNewPassword}
        placeholder="Confirm your new password"
        placeholderTextColor={color.white}
        secureTextEntry={true}
        boxWidth={300}
        onChangeText={(text) => setConfirmNewPassword(text)}
      />
      <LinearGradientButton onPress={handleSubmit} title="Change Password" />
    </View>
  );
};

export default ResetForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
