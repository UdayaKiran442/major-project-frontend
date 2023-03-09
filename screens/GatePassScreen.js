import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import color from "../assets/colors/color";

import PlusButton from "../components/PlusButton";

import {
  getStudentGatePassRequestApi,
  getWardenGatePassRequestApi,
} from "../api/gatePass";
import GatePassCard from "../components/GatePassCard";
import {
  acceptGatePassRequestApi,
  rejectGatePassRequestApi,
} from "../api/warden";

const GatePassScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const [gatePass, setGatePass] = useState([]);
  const [view, setView] = useState("pending");
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
        setGatePass(response.results.requests);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const onAccept = async (id) => {
    try {
      const response = await (await acceptGatePassRequestApi(id)).data;
      if (response.success) {
        alert(response.message);
        getWardenGatePasses();
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const onReject = async (id) => {
    try {
      const response = await (await rejectGatePassRequestApi(id)).data;
      if (response.success) {
        alert(response.message);
        getWardenGatePasses();
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
      <View style={styles.requestsContainer}>
        <Text
          onPress={() => setView("pending")}
          style={view === "pending" ? styles.activeTab : styles.requestName}
        >
          Pending{" "}
        </Text>
        <Text
          onPress={() => setView("accepted")}
          style={view === "accepted" ? styles.activeTab : styles.requestName}
        >
          Accepted{" "}
        </Text>
        <Text
          onPress={() => setView("rejected")}
          style={view === "rejected" ? styles.activeTab : styles.requestName}
        >
          Rejected{" "}
        </Text>
      </View>
      {user.role === "user" && (
        <PlusButton
          screenName="raiseRequest"
          iconName="plus"
          onPress={() => navigation.navigate("gatePassRequest")}
        />
      )}
      <View style={styles.gatePass}>
        {view == "pending" &&
          gatePass.map(
            (pass) =>
              !pass.isAccepted &&
              !pass.isRejected && (
                <GatePassCard key={pass._id} gatePass={pass} />
              )
          )}
        {view == "accepted" &&
          gatePass.map(
            (pass) =>
              pass.isAccepted &&
              !pass.isRejected && (
                <GatePassCard
                  key={pass._id}
                  gatePass={pass}
                  onAccept={() => {
                    onAccept(pass._id);
                  }}
                  onReject={() => {
                    onReject(pass._id);
                  }}
                />
              )
          )}
        {view == "rejected" &&
          gatePass.map(
            (pass) =>
              !pass.isAccepted &&
              pass.isRejected && <GatePassCard key={pass._id} gatePass={pass} />
          )}
      </View>
    </View>
  );
};

export default GatePassScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  gatePass: {},
  requestsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 60,
  },
  requestName: {
    color: color.lightBlack,
    marginLeft: "10%",
  },
  activeTab: {
    color: color.white,
    marginLeft: "10%",
  },
});
