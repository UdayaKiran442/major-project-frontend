import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import color from "../assets/colors/color";

const GatePassCard = () => {
  return (
    <View>
      <View style={styles.gatePassCardContainer}>
        <Text style={[styles.name, styles.text]}>Name:Uday</Text>
        <Text style={[styles.name, styles.text]}>Email:uday@gmail.com</Text>
        <Text style={[styles.name, styles.text]}>Apartment name:Apt-A</Text>
        <Text style={[styles.name, styles.text]}>Room number:A-211</Text>
        <Text style={[styles.name, styles.text]}>Datetimein:123-141-431</Text>
        <Text style={[styles.name, styles.text]}>Datetimeout:413-234-532</Text>
        <Text style={[styles.name, styles.text]}>Reason:Something</Text>
        <View style={styles.buttonContainer}>
          <Button title="Accept" color={color.green} />
          <Button title="Reject" color={color.danger} />
        </View>
      </View>
    </View>
  );
};

export default GatePassCard;

const styles = StyleSheet.create({
  text: {
    color: color.white,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
