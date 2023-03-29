import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../assets/colors/color";

const Filter = ({ onPress }) => {
  return (
    <>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name="filter"
            color={color.danger}
            size={25}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
  },
});
