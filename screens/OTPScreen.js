import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import color from "../assets/colors/color";
import LinearGradientButton from "../components/LinearGradientButton";

function OTPScreen(props) {
  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();
  const pin5Ref = useRef();
  const [pin1, setPin1] = useState(null);
  const [pin2, setPin2] = useState(null);
  const [pin3, setPin3] = useState(null);
  const [pin4, setPin4] = useState(null);
  const [pin5, setPin5] = useState(null);
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
      <LinearGradientButton title="Submit" />
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
