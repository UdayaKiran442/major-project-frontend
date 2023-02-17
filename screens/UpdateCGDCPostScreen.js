import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";

import color from "../assets/colors/color";

const UpdateCGDCPostScreen = ({ route }) => {
  const { postId } = route.params;
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Select", value: "select" },
    { label: "Internship", value: "internships" },
    { label: "Full time job", value: "fulltime" },
    { label: "Hackathon", value: "hackathons" },
    { label: "Event", value: "events" },
  ]);
  const updatePost = () => {};
  return (
    <View style={styles.container}>
      <TextInputComp
        placeholder="Enter the content"
        placeholderTextColor={color.white}
        multiline={true}
        numberOfLines={200}
        boxWidth={400}
      />
      <TextInputComp
        placeholder="Paste a link"
        placeholderTextColor={color.white}
        boxWidth={400}
      />
      <DropDownPicker
        items={items}
        setItems={setItems}
        open={open}
        onPress={() => {
          setOpen(!open);
        }}
      />
      <LinearGradientButton title="Update Post" onPress={updatePost} />
    </View>
  );
};

export default UpdateCGDCPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
