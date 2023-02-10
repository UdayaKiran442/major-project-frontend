import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../assets/colors/color";

const AccountScreenOptions = ({
  size,
  color,
  iconName,
  text,
  marginBottom,
  fontSize,
}) => {
  return (
    <View style={[styles.container, { marginBottom: marginBottom }]}>
      <MaterialCommunityIcons size={size} color={color} name={iconName} />
      <Text style={[styles.textOption, { fontSize: fontSize }]}>{text}</Text>
    </View>
  );
};

export default AccountScreenOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textOption: {
    color: color.white,
    marginLeft: 10,
    fontSize: 15,
  },
});
