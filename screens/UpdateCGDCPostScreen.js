import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as FileSystem from "expo-file-system";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";
import SelectImage from "../components/SelectImage";

import color from "../assets/colors/color";

import { getCGDCPostByIdApi, updateCGDCPostApi } from "../api/cgdc";
import uploadImage from "../utils/uploadImage";
import selectImage from "../utils/ImagePicker";

const UpdateCGDCPostScreen = ({ navigation, route }) => {
  const [content, setContent] = useState();
  const [link, setLink] = useState();
  const [category, setCategory] = useState();
  const [public_id, setPublicId] = useState();
  const [secure_url, setSecureUrl] = useState();
  const [loading, setLoading] = useState(false);
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
      console.log(secure_url, public_id);
      const { success, message, error } = await (
        await updateCGDCPostApi(
          postId,
          content,
          link,
          category,
          public_id,
          secure_url
        )
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

  const selectNewImage = async () => {
    const selectedImage = await selectImage();
    const base64URI = await FileSystem.readAsStringAsync(selectedImage.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const { public_id, secure_url } = await uploadImage(base64URI);
    setPublicId(public_id);
    setSecureUrl(secure_url);
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
          results.image?.public_id && setPublicId(results.image?.public_id);
          results.image?.secure_url && setSecureUrl(results.image?.secure_url);
        }

        {
          results?.link && setLink(results?.link);
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
      {/* {public_id ? (
        <SelectImage onPress={selectNewImage} buttonTitle={public_id} />
      ) : (
        <SelectImage onPress={selectNewImage} buttonTitle="Select an image" />
      )} */}
      {loading ? (
        <Text style={{ color: color.red }}>Uploading...</Text>
      ) : public_id ? (
        <SelectImage onPress={selectNewImage} buttonTitle={public_id} />
      ) : (
        <SelectImage onPress={selectNewImage} buttonTitle="Select an image" />
      )}
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
