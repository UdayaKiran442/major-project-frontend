import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import color from "../assets/colors/color";
import { logOutUserAction } from "../redux/userReducer";
import autoLogOutAfterTokenExpiry from "../utils/autoLogOut";
import { removeToken } from "../storage/storage";

import TextInputComp from "../components/TextInput";

import { searchFacultyApi } from "../api/user";
import { getFacultyFreeSlotsApi } from "../api/faculty";

const HomeScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const [searchText, setSearchText] = useState("");
  const [faculties, setFaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState();
  const [facultyFreeSlots, setFacultyFreeSlots] = useState([]);
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

  const handleFaculty = async (f) => {
    setSelectedFaculty(f);
    console.log("f:", f);
    try {
      const data = (await getFacultyFreeSlotsApi(f._id)).data;
      console.log("Free time:", data);
      setFacultyFreeSlots(data.freeTimeSlots);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    checkTokenExpiry();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TextInputComp
        value={searchText}
        placeholder="Search Faculty"
        onChangeText={searchFaculty}
        placeholderTextColor={color.white}
        boxWidth={400}
        autoCapitalize="none"
        borderRadius={20}
      />
      {searchText.length > 2 && (
        <View style={styles.searchContainer}>
          {faculties.map((f) => (
            <TouchableOpacity key={f._id} onPress={() => handleFaculty(f)}>
              <View style={styles.faculties}>
                <Text style={styles.name}>{f.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {searchText.length >= 3 && (
        <View style={styles.facultyInfo}>
          <Text style={{ color: color.white }}>{selectedFaculty?.name}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  faculties: {
    backgroundColor: color.lightBlack,
  },
  searchContainer: {},
  name: {
    color: color.white,
    padding: 10,
  },
});
