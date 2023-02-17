import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import color from "../assets/colors/color";

const CGDCPostCard = ({ userImgUri, userName, postContent, postImgUri }) => {
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
        </View>
        <View style={styles.postsImageContainer}>
          <Image
            source={{
              uri: { postImgUri },
            }}
            style={styles.postsImage}
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
});
