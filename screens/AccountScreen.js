import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

import color from "../assets/colors/color";
import AccountScreenOptions from "../components/AccountScreenOptions";
import { logOutUserAction } from "../redux/userReducer";

const AccountScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOutUser = async () => {
    console.log("Logout clicked");
    await SecureStore.deleteItemAsync("token");
    const token = await SecureStore.getItemAsync("token");
    console.log("After pressing logout button:", token);
    dispatch(logOutUserAction());
    navigation.navigate("login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userName}>
        <View style={styles.profilePicContainer}>
          <Text style={styles.profilePic}>{user.name[0]}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <AccountScreenOptions
        iconName="email"
        size={25}
        color={color.white}
        text={user.email}
        marginBottom={5}
      />
      <AccountScreenOptions
        iconName="phone"
        size={25}
        color={color.white}
        text="9160891919"
        marginBottom={5}
      />
      <View style={styles.optionContainer}>
        <AccountScreenOptions
          iconName="key-change"
          size={25}
          color={color.white}
          text="Change Password"
          marginBottom={25}
          fontSize={25}
        />
        <AccountScreenOptions
          iconName="history"
          size={25}
          color={color.white}
          text="Previous bookings"
          marginBottom={25}
          fontSize={25}
        />
        <AccountScreenOptions
          iconName="bookmark"
          size={25}
          color={color.white}
          text="Saved Posts"
          marginBottom={25}
          fontSize={25}
        />
        <View style={styles.logout}>
          <MaterialCommunityIcons
            name="logout"
            color={color.primary}
            size={30}
          />
          <Text style={styles.logoutText} onPress={logOutUser}>
            Logout
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  userName: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  profilePicContainer: {
    backgroundColor: color.secondary,
    width: 50,
    borderRadius: 100,
    padding: 10,
    marginRight: 10,
  },
  profilePic: {
    fontSize: 25,
    color: color.white,
    textAlign: "center",
  },
  name: {
    color: color.primary,
    fontSize: 25,
  },
  optionContainer: {
    marginTop: 40,
  },
  logout: {
    marginTop: 50,
    flexDirection: "row",
  },
  logoutText: {
    color: color.primary,
    fontSize: 25,
  },
});
