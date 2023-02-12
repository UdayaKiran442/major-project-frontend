import React, { useState, useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import color from "../assets/colors/color";
import LinearGradientButton from "../components/LinearGradientButton";

import { verifyOtpApi } from "../api/user";

function OTPScreen({ route, navigation }) {
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

  const submitOTP = async () => {
    const otp = pin1 + pin2 + pin3 + pin4 + pin5;
    const { userId } = route.params;
    console.log("otp:", otp);
    try {
      const response = await (await verifyOtpApi(userId, otp)).data;
      console.log("Verify otp response:", response);
      if (response.success) {
        alert(response.message);
        navigation.navigate("login");
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
      <LinearGradientButton onPress={submitOTP} title="Submit" />
    </View>
  );
}

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

export default OTPScreen;
