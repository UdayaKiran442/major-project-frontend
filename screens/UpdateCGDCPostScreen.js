import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";

import color from "../assets/colors/color";

import { getCGDCPostByIdApi, updateCGDCPostApi } from "../api/cgdc";

const UpdateCGDCPostScreen = ({ navigation, route }) => {
  const [content, setContent] = useState();
  const [link, setLink] = useState();
  const [category, setCategory] = useState();
  const { postId } = route.params;
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Select", value: "select" },
    { label: "Internship", value: "internships" },
    { label: "Full time job", value: "fulltime" },
    { label: "Hackathon", value: "hackathons" },
    { label: "Event", value: "events" },
  ]);
  const updatePost = async () => {
    try {
      const { success, message, error } = await (
        await updateCGDCPostApi(postId, content, link, category)
      ).data;
      if (success) {
        alert(message);
        navigation.navigate("cgdcScreen");
      } else {
        alert(error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const getPostById = async () => {
    try {
      const { results, success, error } = await (
        await getCGDCPostByIdApi(postId)
      ).data;
      if (success) {
        setContent(results.content);
        setCategory(results.category);
        {
          results.link && setLink(results.link);
        }
      } else {
        alert(error);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  useEffect(() => {
    getPostById();
  }, []);
  return (
    <View style={styles.container}>
      <TextInputComp
        value={content}
        placeholder="Enter the content"
        placeholderTextColor={color.white}
        multiline={true}
        numberOfLines={200}
        boxWidth={400}
        onChangeText={(text) => {
          setContent(text);
        }}
      />

      <TextInputComp
        value={link}
        placeholder="Paste a link"
        placeholderTextColor={color.white}
        boxWidth={400}
        onChangeText={(text) => {
          setLink(text);
        }}
      />

      <DropDownPicker
        value={category}
        items={items}
        setItems={setItems}
        open={open}
        onPress={() => {
          setOpen(!open);
        }}
        setValue={setCategory}
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
