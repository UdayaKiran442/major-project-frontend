import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import color from "../assets/colors/color";
import { logOutUserAction } from "../redux/userReducer";
import autoLogOutAfterTokenExpiry from "../utils/autoLogOut";
import { removeToken } from "../storage/storage";

const HomeScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const checkTokenExpiry = async () => {
    const isExpired = autoLogOutAfterTokenExpiry(user.exp);
    console.log("Expired:", isExpired);
    if (isExpired) {
      await removeToken();
      dispatch(logOutUserAction());
      alert("Session expired!Login again");
      navigation.navigate("AuthNavigator", { screen: "login" });
    }
  };
  useEffect(() => {
    checkTokenExpiry();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
});
