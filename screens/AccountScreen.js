import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import color from "../assets/colors/color";

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AccountScreen</Text>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
});
