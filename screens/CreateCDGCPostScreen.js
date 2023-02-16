import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";

import TextInputComp from "../components/TextInput";

import color from "../assets/colors/color";
import LinearGradientButton from "../components/LinearGradientButton";
import { createCGDCPostApi } from "../api/cgdc";

const CreateCDGCPostScreen = ({ navigation }) => {
  const [content, setContent] = useState();
  const [link, setLink] = useState();
  const [category, setCategory] = useState();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Select", value: "select" },
    { label: "Internship", value: "internships" },
    { label: "Full time job", value: "fulltime" },
    { label: "Hackathon", value: "hackathons" },
    { label: "Event", value: "events" },
  ]);
  const [image, setImage] = useState();
  const selectImage = async () => {
    try {
      const results = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!results.canceled) {
        setImage(results.assets[0].uri);
      }
    } catch (error) {
      alert("Error in selecting image:", error.message);
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await (
        await createCGDCPostApi(content, link, category, image)
      ).data;
      console.log(response);
      if (response.success) {
        alert(response.message);
        navigation.navigate("cgdcScreen");
      } else {
        alert(response.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TextInputComp
        value={content}
        placeholder="Enter the content"
        placeholderTextColor={color.white}
        multiline={true}
        numberOfLines={200}
        boxWidth={400}
        onChangeText={(text) => setContent(text)}
      />
      <TextInputComp
        value={link}
        placeholder="Paste a link"
        placeholderTextColor={color.white}
        boxWidth={400}
        onChangeText={(text) => setLink(text)}
      />
      <DropDownPicker
        items={items}
        setItems={setItems}
        open={open}
        onPress={() => {
          setOpen(!open);
        }}
        value={category}
        setValue={setCategory}
      />
      <View style={styles.selectImageContainer}>
        <Text style={styles.selectImage} onPress={selectImage}>
          Select an image
        </Text>
      </View>
      <LinearGradientButton title="Create Post" onPress={handleSubmit} />
    </View>
  );
};

export default CreateCDGCPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.black,
  },
  selectImageContainer: {
    marginRight: 300,
    marginBottom: 20,
  },
  selectImage: {
    color: color.secondary,
  },
});
