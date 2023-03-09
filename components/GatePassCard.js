import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import color from "../assets/colors/color";

const GatePassCard = ({ gatePass, onAccept, onReject }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <View>
      <View style={styles.gatePassCardContainer}>
        {user.role === "user" ? (
          <Text style={[styles.name, styles.text]}>Name:{user.name}</Text>
        ) : (
          <Text style={[styles.name, styles.text]}>
            Name:{gatePass.student.name}
          </Text>
        )}
        {user.role === "user" ? (
          <Text style={[styles.name, styles.text]}>Email:{user.email}</Text>
        ) : (
          <Text style={[styles.name, styles.text]}>
            Email:{gatePass.student.email}
          </Text>
        )}
        {user.role === "user" ? (
          <Text style={[styles.name, styles.text]}>
            Apartment name:{user.hostelName}
          </Text>
        ) : (
          <Text style={[styles.name, styles.text]}>
            Apartment name:{gatePass.student.hostelName}
          </Text>
        )}

        <Text style={[styles.name, styles.text]}>
          Room number:{gatePass.roomNumber}
        </Text>
        <Text style={[styles.name, styles.text]}>
          Datetimein:{gatePass.datetimein}
        </Text>
        <Text style={[styles.name, styles.text]}>
          Datetimeout:{gatePass.datetimeout}
        </Text>
        <Text style={[styles.name, styles.text]}>Reason:{gatePass.reason}</Text>
        <View style={styles.buttonContainer}>
          {!gatePass.isAccepted && !gatePass.isRejected && (
            <>
              <Button title="Accept" color={color.green} onPress={onAccept} />
              <Button title="Reject" color={color.danger} onPress={onReject} />
            </>
          )}

          {gatePass.isAccepted && (
            <Button title="Accepted" color={color.green} />
          )}
          {gatePass.isRejected && (
            <Button title="Rejected" color={color.danger} />
          )}
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
