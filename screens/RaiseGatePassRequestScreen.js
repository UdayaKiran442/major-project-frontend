import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

import color from "../assets/colors/color";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";
import { raiseGatePassRequestApi } from "../api/gatePass";

const RaiseGatePassRequestScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);

  const [roomNumber, setRoomNumber] = useState();
  const [reason, setReason] = useState();
  const [datetimeout, setDateTimeOut] = useState(new Date());
  const [datetimein, setDateTimeIn] = useState(new Date());
  const [mode, setMode] = useState("");
  const [show, setShow] = useState(false);
  const [showOut, setShowOut] = useState(false);
  const [onChangeInDate, setOnChangeInDate] = useState(false);
  const [onChangeOutDate, setOnChangeOutDate] = useState(false);

  const onChangeIn = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateTimeIn(currentDate);
    setOnChangeInDate(true);
  };

  const onChangeOut = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateTimeOut(currentDate);
    setOnChangeOutDate(true);
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
    try {
      const response = await (
        await raiseGatePassRequestApi(
          roomNumber,
          datetimeout,
          datetimein,
          reason
        )
      ).data;
      if (response.success) {
        alert(response.message);
        navigation.navigate("gatePass");
      } else {
        alert(response.error);
        navigation.navigate("gatePass");
      }
    } catch (error) {
      alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.requestContainer}>
        <TextInputComp
          value={user.name}
          boxWidth={400}
          editable={false}
          selectTextOnFocus={false}
        />
        <TextInputComp
          value={user.email}
          boxWidth={400}
          editable={false}
          selectTextOnFocus={false}
        />
        <TextInputComp
          value={user.hostelName}
          boxWidth={400}
          editable={false}
          selectTextOnFocus={false}
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
        {onChangeInDate && (
          <Text style={{ color: color.white }}>
            In Date and Time: {datetimein.toLocaleString()}
          </Text>
        )}
        {onChangeOutDate && (
          <Text style={{ color: color.white }}>
            Out Date and Time: {datetimeout.toLocaleString()}
          </Text>
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
