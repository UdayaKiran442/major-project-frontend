import React from "react";
import { StyleSheet, View } from "react-native";

import color from "../assets/colors/color";

import PlusButton from "../components/PlusButton";

const GatePassScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PlusButton
        screenName="raiseRequest"
        iconName="plus"
        onPress={() => navigation.navigate("gatePassRequest")}
      />
    </View>
  );
};

export default GatePassScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
});
