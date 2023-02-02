import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";

import LinearGradientButton from "../components/LinearGradientButton";
import bmu from "../assets/bmu-logo.webp";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>CampusFlow</Text>
      <Text style={{ color: "white", fontSize: 20 }}>
        Welcome to BML Munjal University
      </Text>
      <View style={styles.imageContainer}>
        <Image source={bmu} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <LinearGradientButton title="Sign up" />
        </View>
        <View>
          <LinearGradientButton title="Sign in" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  name: {
    color: "#ff500b",
    fontSize: 40,
    fontWeight: "bold",
  },
  imageContainer: {
    marginTop: "40%",
  },
  image: {
    width: 400,
    height: 100,
  },
  buttonContainer: {
    marginTop: "40%",
    width: "90%",
  },
  button: {
    marginBottom: 30,
  },
});

export default WelcomeScreen;
