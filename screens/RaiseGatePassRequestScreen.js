import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import color from "../assets/colors/color";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";

const RaiseGatePassRequestScreen = () => {
  const [hostelName, setHostelName] = useState();
  const [roomNumber, setRoomNumber] = useState();
  const [reason, setReason] = useState();
  const [datetimeout, setDateTimeOut] = useState(new Date());
  const [datetimein, setDateTimeIn] = useState(new Date());
  const [mode, setMode] = useState("");
  const [show, setShow] = useState(false);
  const [showOut, setShowOut] = useState(false);
  const onChangeIn = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateTimeIn(currentDate);
  };
  const onChangeOut = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateTimeOut(currentDate);
  };
  const showDateTimePicker = () => {
    setShow(!show);
    setMode("datetime");
  };
  const showDateTimePickerOut = () => {
    setShowOut(!showOut);
    setMode("datetime");
  };
  const onSubmit = async () => {
    console.log(hostelName, roomNumber, reason, datetimein, datetimeout);
  };
  return (
    <View style={styles.container}>
      <View style={styles.requestContainer}>
        <TextInputComp
          value={hostelName}
          placeholder="Hostel Name"
          placeholderTextColor={color.white}
          boxWidth={400}
          onChangeText={(text) => setHostelName(text)}
        />
        <TextInputComp
          value={roomNumber}
          placeholder="Room Number"
          placeholderTextColor={color.white}
          boxWidth={400}
          onChangeText={(text) => setRoomNumber(text)}
        />
        <TextInputComp
          value={reason}
          placeholder="Reason"
          placeholderTextColor={color.white}
          multiline={true}
          numberOfLines={200}
          boxWidth={400}
          onChangeText={(text) => setReason(text)}
        />
        <Text style={{ color: color.white }}>
          In Date and Time: {datetimein.toLocaleString()}
        </Text>
        <Text style={{ color: color.white }}>
          Out Date and Time: {datetimeout.toLocaleString()}
        </Text>
        <Button title="Select Date and time in" onPress={showDateTimePicker} />
        {show && (
          <DateTimePicker
            value={datetimein}
            mode={mode}
            is24Hour={true}
            onChange={onChangeIn}
            display="default"
            style={styles.datetime}
            minimumDate={new Date(Date.now())}
          />
        )}
        <Button
          title="Select Date and time out"
          onPress={showDateTimePickerOut}
        />
        {showOut && (
          <DateTimePicker
            value={datetimeout}
            mode={mode}
            is24Hour={true}
            onChange={onChangeOut}
            display="default"
            style={styles.datetime}
            minimumDate={new Date(Date.now())}
          />
        )}
        <LinearGradientButton title="Raise Request" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default RaiseGatePassRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    justifyContent: "center",
    alignItems: "center",
  },
  requestContainer: {},
  datetime: {
    color: color.primary,
    backgroundColor: color.white,
  },
});
