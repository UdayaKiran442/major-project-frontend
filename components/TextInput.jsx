import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import color from "../assets/colors/color";

const TextInputComp = ({ placeholder, ...otherProps }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: color.white,
    marginBottom: 20,
    color: color.white,
  },
});
