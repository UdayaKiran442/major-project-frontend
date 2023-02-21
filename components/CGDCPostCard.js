import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Share,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import * as Linking from "expo-linking";

import color from "../assets/colors/color";

import { deleteCGDCPostApi } from "../api/cgdc";

const CGDCPostCard = ({
  userImgUri,
  userName,
  postContent,
  postImgUri,
  postLink,
  postId,
  createdAt,
  fetchCGDCPosts,
}) => {
  const { user } = useSelector((state) => state.user);
  const isFocussed = useIsFocused();
  const [time, setTime] = useState();
  const [postDeleted, setPostDeleted] = useState(false);
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
  const calculatePostTime = () => {
    const date = new Date();
    const date1 = moment(date.toISOString());
    const date2 = moment(createdAt);
    const diffInSeconds = date1.diff(date2, "seconds");
    const diffInMinutes = date1.diff(date2, "minutes");
    const diffInHours = date1.diff(date2, "hours");
    const diffInDays = date1.diff(date2, "days");
    if (diffInSeconds >= 0 && diffInSeconds <= 60) {
      setTime(diffInSeconds + "sec");
    } else if (diffInMinutes <= 60) {
      setTime(diffInMinutes + "min");
    } else if (diffInHours <= 24) {
      setTime(diffInHours + "h");
    } else {
      setTime(diffInDays + "d");
    }
  };
  const deleteCGDCPost = async () => {
    try {
      const response = (await deleteCGDCPostApi(postId)).data;
      if (response.success) {
        setPostDeleted(true);
        alert(response.message);
        navigation.navigate("cgdcScreen");
      } else {
        alert(response.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    if (postDeleted) {
      fetchCGDCPosts();
      setPostDeleted(false);
    }
    calculatePostTime();
  }, [isFocussed, postDeleted]);
  return (
    <View style={styles.postsContainer}>
      <View style={styles.posts}>
        <View style={styles.userDetails}>
          <View style={styles.userImageContainer}>
            <Image style={styles.userImage} source={userImgUri} />
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.timeline}>{time}</Text>
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
                onPress={deleteCGDCPost}
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
    flexDirection: "row",
    alignItems: "center",
  },
  timeline: {
    color: color.white,
    marginLeft: "10%",
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
