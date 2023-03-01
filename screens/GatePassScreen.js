import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import color from "../assets/colors/color";

import PlusButton from "../components/PlusButton";

import {
  getStudentGatePassRequestApi,
  getWardenGatePassRequestApi,
} from "../api/gatePass";

const GatePassScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const getStudentRequests = async () => {
    try {
      const response = await (await getStudentGatePassRequestApi()).data;
      if (response.success) {
        console.log(response.results);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const getWardenGatePasses = async () => {
    try {
      const response = await (await getWardenGatePassRequestApi()).data;
      if (response.success) {
        console.log(response.results);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    if (user.role === "user") {
      getStudentRequests();
    }
    if (user.role === "warden") {
      getWardenGatePasses();
    }
  }, []);
  return (
    <View style={styles.container}>
      {user.role === "user" && (
        <PlusButton
          screenName="raiseRequest"
          iconName="plus"
          onPress={() => navigation.navigate("gatePassRequest")}
        />
      )}
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
