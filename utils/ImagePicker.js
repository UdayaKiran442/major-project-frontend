import * as ImagePicker from "expo-image-picker";

export default selectImage = async () => {
  try {
    const results = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!results.canceled) {
      return {
        uri: results.assets[0].uri,
        base64: results.assets[0].base64,
      };
    }
  } catch (error) {
    console.log("Error in selecting image:", error);
  }
};
