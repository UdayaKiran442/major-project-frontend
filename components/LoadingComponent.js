import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const LoadingComponent = () => {
  return (
    <LottieView
      autoPlay
      loop={true}
      source={require("../assets/lottie-animations/loader.json")}
    />
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({});
