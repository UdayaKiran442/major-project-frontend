import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../assets/colors/color";

const PlusButton = ({ onPress, iconName }) => {
  return (
    <View style={styles.plusIconContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.plusIcon}>
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            color={color.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  plusIconContainer: {
    alignItems: "flex-end",
  },
  plusIcon: {
    marginRight: 30,
    backgroundColor: color.danger,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
