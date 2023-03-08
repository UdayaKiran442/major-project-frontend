import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import color from "../assets/colors/color";

const GatePassCard = ({ gatePass }) => {
  const onAccept = () => {};
  const onReject = () => {};
  return (
    <View>
      <View style={styles.gatePassCardContainer}>
        <Text style={[styles.name, styles.text]}>
          Name:{gatePass.student.name}
        </Text>
        <Text style={[styles.name, styles.text]}>
          Email:{gatePass.student.email}
        </Text>
        <Text style={[styles.name, styles.text]}>
          Apartment name:{gatePass.student.hostelName}
        </Text>
        <Text style={[styles.name, styles.text]}>
          Room number:{gatePass.student.roomNumber}
        </Text>
        <Text style={[styles.name, styles.text]}>
          Datetimein:{gatePass.datetimein}
        </Text>
        <Text style={[styles.name, styles.text]}>
          Datetimeout:{gatePass.datetimeout}
        </Text>
        <Text style={[styles.name, styles.text]}>Reason:{gatePass.reason}</Text>
        <View style={styles.buttonContainer}>
          {!gatePass.accepted && !gatePass.rejected && (
            <>
              <Button title="Accept" color={color.green} onPress={onAccept} />
              <Button title="Reject" color={color.danger} onPress={onReject} />
            </>
          )}

          {gatePass.accepted && (
            <Button
              title="Accepted"
              color={color.green}
              onPress={onRejectAcceptedRequest}
            />
          )}
          {gatePass.rejected && (
            <Button
              title="Rejected"
              color={color.danger}
              onPress={onAcceptRejectedRequest}
            />
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
