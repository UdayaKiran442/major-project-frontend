import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import DropDownPicker from "react-native-dropdown-picker";

import TextInputComp from "../components/TextInput";
import LinearGradientButton from "../components/LinearGradientButton";

import color from "../assets/colors/color";

import { createCGDCPostApi } from "../api/cgdc";

import { cloudName } from "../config/cloudinary";

const CreateCDGCPostScreen = ({ navigation }) => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [content, setContent] = useState();
  const [link, setLink] = useState();
  const [category, setCategory] = useState();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Internship", value: "internships" },
    { label: "Full time job", value: "fulltime" },
    { label: "Hackathon", value: "hackathons" },
    { label: "Event", value: "events" },
  ]);
  const [image, setImage] = useState();
  const [publicId, setPublicId] = useState();
  const [secureUrl, setSecureUrl] = useState();
  const selectImage = async () => {
    try {
      const results = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(results.assets);
      if (!results.canceled) {
        setImage(results.assets[0].uri);
        const base64URI = await FileSystem.readAsStringAsync(
          results.assets[0].uri,
          { encoding: FileSystem.EncodingType.Base64 }
        );
        setUploadingImage(true);
        const { public_id, secure_url } = await uploadImage(base64URI);
        setPublicId(public_id);
        setSecureUrl(secure_url);
        setUploadingImage(false);
      }
    } catch (error) {
      console.log("Error in selecting image:", error);
    }
  };
  const uploadImage = async (base64) => {
    const base64Img = `data:image/jpg;base64,${base64}`;
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const data = {
      file: base64Img,
      upload_preset: "majorproject1",
    };
    return fetch(apiUrl, {
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
      method: "POST",
    }).then((response) => response.json());
  };

  const handleSubmit = async () => {
    try {
      const response = await (
        await createCGDCPostApi(content, link, category, publicId, secureUrl)
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
        {image ? (
          uploadingImage ? (
            <Text style={styles.selectImage}>Uploading image.....</Text>
          ) : (
            <Text style={styles.selectImage}>{publicId}</Text>
          )
        ) : (
          <Text style={styles.selectImage} onPress={selectImage}>
            Select an image
          </Text>
        )}
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
