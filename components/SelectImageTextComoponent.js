import React from "react";
import { StyleSheet, Text, View } from "react-native";

import color from "../assets/colors/color";

const SelectImageTextComoponent = ({ text, onPress }) => {
  return (
    <View>
      <Text style={styles.selectImage} onPress={onPress}>
        {text}
      </Text>
    </View>
  );
};

export default SelectImageTextComoponent;

const styles = StyleSheet.create({
  selectImage: {
    color: color.secondary,
    marginBottom: 10,
  },
});
