import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Share,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";

import color from "../assets/colors/color";

const CGDCPostCard = ({
  userImgUri,
  userName,
  postContent,
  postImgUri,
  postLink,
  postId,
}) => {
  const { user } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const SharePost = async () => {
    try {
      const result = await Share.share({
        message: "Check out this post",
        url: "exp://10.7.2.154:19000",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          alert("Post shared successfully");
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.postsContainer}>
      <View style={styles.posts}>
        <View style={styles.userDetails}>
          <View style={styles.userImageContainer}>
            <Image style={styles.userImage} source={userImgUri} />
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{userName}</Text>
          </View>
        </View>
        <View style={styles.postsContentContainer}>
          <Text style={styles.postsContent}>{postContent}</Text>
          {postLink && (
            <Text
              style={styles.link}
              onPress={() => {
                Linking.openURL(postLink);
              }}
            >
              {postLink}
            </Text>
          )}
        </View>
        {postImgUri && (
          <View style={styles.postsImageContainer}>
            <Image
              source={{
                uri: postImgUri,
              }}
              style={styles.postsImage}
            />
          </View>
        )}
        <View style={styles.optionsContainer}>
          {user.role === "cgdc" && (
            <>
              <MaterialCommunityIcons
                style={styles.options}
                name="pencil"
                color={color.white}
                size={20}
                onPress={() =>
                  navigation.navigate("updateCGDCPost", { postId })
                }
              />
              <MaterialCommunityIcons
                style={styles.options}
                name="delete"
                color={color.white}
                size={20}
              />
            </>
          )}

          <MaterialCommunityIcons
            style={styles.options}
            name="share"
            color={color.white}
            size={20}
            onPress={SharePost}
          />
        </View>
      </View>
    </View>
  );
};

export default CGDCPostCard;

const styles = StyleSheet.create({
  postsContainer: {
    marginTop: 30,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  userNameContainer: {
    marginLeft: 20,
  },
  userImageContainer: {},
  userImage: {
    width: 50,
    height: 50,
    borderRadius: "60%",
  },
  userName: {
    color: color.white,
    fontSize: 19,
    fontWeight: "700",
  },
  posts: {
    padding: 20,
  },
  postsImageContainer: {
    marginTop: 10,
  },
  postsImage: {
    width: "100%",
    height: 300,
    borderRadius: 30,
  },
  postsContentContainer: {
    marginTop: 10,
  },
  postsContent: {
    color: color.white,
    fontSize: 15,
    fontWeight: "500",
  },
  link: {
    color: color.link,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
    marginTop: 10,
  },
  options: {
    marginRight: 10,
  },
});
