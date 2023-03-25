import React from "react";
import { StyleSheet, Text, View } from "react-native";

import color from "../assets/colors/color";

const SelectImage = ({ onPress, buttonTitle }) => {
  return (
    <View style={styles.selectImageContainer}>
      <Text style={styles.selectImage} onPress={onPress}>
        {buttonTitle}
      </Text>
    </View>
  );
};

export default SelectImage;

const styles = StyleSheet.create({
  selectImageContainer: {
    marginRight: 300,
    marginBottom: 20,
  },
  selectImage: {
    color: color.secondary,
  },
});
