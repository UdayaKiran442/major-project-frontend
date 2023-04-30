import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import color from "../assets/colors/color";
import { logOutUserAction } from "../redux/userReducer";
import autoLogOutAfterTokenExpiry from "../utils/autoLogOut";
import { removeToken } from "../storage/storage";

import TextInputComp from "../components/TextInput";
import { searchFacultyApi } from "../api/user";

const HomeScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const [searchText, setSearchText] = useState();
  const [faculties, setFaculties] = useState([]);
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

  const searchFaculty = async (text) => {
    setSearchText(text);
    console.log("Search text:", searchText);
    const data = (await searchFacultyApi(text)).data;
    console.log("Search faculty API", data);
    setFaculties(data.faculties);
  };

  useEffect(() => {
    checkTokenExpiry();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>HomeScreen</Text>
      <TextInputComp
        value={searchText}
        placeholder="Search Faculty"
        onChangeText={searchFaculty}
      />
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
