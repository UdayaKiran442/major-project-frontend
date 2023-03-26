import React, { useState, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { verifyForgotPasswordOTPApi } from "../api/user";

import color from "../assets/colors/color";
import LinearGradientButton from "../components/LinearGradientButton";

const ForgotPasswordOTPScreen = ({ navigation, route }) => {
  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();
  const pin5Ref = useRef();
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const { userEmail } = route.params;
  const handleSubmit = async () => {
    const otp = pin1 + pin2 + pin3 + pin4 + pin5;
    try {
      const response = await (
        await verifyForgotPasswordOTPApi(userEmail, otp)
      ).data;
      if (response.success) {
        alert(response.message);
        navigation.navigate("resetForgotPassword", {
          useremail: response.results,
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
      <View style={styles.otpInputContainer}>
        <TextInput
          ref={pin1Ref}
          style={styles.otpInputField}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(pin1) => {
            setPin1(pin1);
            if (pin1 !== null) {
              pin2Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin2Ref}
          style={styles.otpInputField}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(pin2) => {
            setPin2(pin2);
            if (pin2 !== null) {
              pin3Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin3Ref}
          style={styles.otpInputField}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(pin3) => {
            setPin3(pin3);
            if (pin3 !== null) {
              pin4Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin4Ref}
          style={styles.otpInputField}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(pin4) => {
            setPin4(pin4);
            if (pin4 !== null) {
              pin5Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin5Ref}
          style={styles.otpInputField}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(pin5) => {
            setPin5(pin5);
          }}
        />
      </View>
      <LinearGradientButton title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ForgotPasswordOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.black,
  },
  otpInputContainer: {
    display: "flex",
    flexDirection: "row",
  },
  otpInputField: {
    width: 50,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: color.white,
    marginBottom: 20,
    color: color.white,
    marginLeft: 20,
  },
});
