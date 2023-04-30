import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { getFacultyFreeSlotsApi } from "../api/faculty";

import color from "../assets/colors/color";

const FacultyFreeTimeScreen = () => {
  const { user } = useSelector((state) => state.user);
  const [freeSlots, setFreeSlots] = useState([]);

  const getFacultyFreeTimings = async () => {
    const data = (await getFacultyFreeSlotsApi(user.id)).data;
    if (data.success) {
      console.log("Free time slots:", data.freeTimeSlots);
      setFreeSlots(data.freeTimeSlots);
    }
  };

  useEffect(() => {
    getFacultyFreeTimings();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.facultyContainer}>
        <Text style={styles.name}>Name: {user.name}</Text>
        <Text style={styles.name}>Email: {user.email}</Text>
        <Text style={styles.name}>Cabin Number: {user.cabinNumber}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FacultyFreeTimeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: color.black },
  name: {
    fontSize: 20,
    color: color.white,
  },
});
