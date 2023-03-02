import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import color from "../assets/colors/color";

const GatePassCard = ({
  name,
  email,
  hostelName,
  roomNumber,
  datetimein,
  datetimeout,
  reason,
  onAccept,
  onReject,
  onRejectAcceptedRequest,
  onAcceptRejectedRequest,
  accepted,
  rejected,
}) => {
  return (
    <View>
      <View style={styles.gatePassCardContainer}>
        <Text style={[styles.name, styles.text]}>Name:{name}</Text>
        <Text style={[styles.name, styles.text]}>Email:{email}</Text>
        <Text style={[styles.name, styles.text]}>
          Apartment name:{hostelName}
        </Text>
        <Text style={[styles.name, styles.text]}>Room number:{roomNumber}</Text>
        <Text style={[styles.name, styles.text]}>Datetimein:{datetimein}</Text>
        <Text style={[styles.name, styles.text]}>
          Datetimeout:{datetimeout}
        </Text>
        <Text style={[styles.name, styles.text]}>Reason:{reason}</Text>
        <View style={styles.buttonContainer}>
          {!accepted && !rejected && (
            <>
              <Button title="Accept" color={color.green} onPress={onAccept} />
              <Button title="Reject" color={color.danger} onPress={onReject} />
            </>
          )}

          {accepted && (
            <Button
              title="Accepted"
              color={color.green}
              onPress={onRejectAcceptedRequest}
            />
          )}
          {rejected && (
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
