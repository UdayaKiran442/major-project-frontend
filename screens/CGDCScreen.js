import React, { useEffect, useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";

import color from "../assets/colors/color";
import useCGDC from "../context/useCGDC";
import CGDCPostCard from "../components/CGDCPostCard";

const CGDCScreen = ({ navigation }) => {
  const [refresh, setRefresh] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { user } = useSelector((state) => state.user);
  const { posts, getPosts } = useCGDC();
  const [cgdcPosts, setCgdcPosts] = useState();
  const isFocussed = useIsFocused();
  const fetchCGDCPosts = async () => {
    await getPosts();
    const filteredPosts = selectedCategory
      ? posts.filter((post) => post.category === selectedCategory)
      : posts;
    setCgdcPosts(filteredPosts);
  };
  const onRefresh = useCallback(() => {
    setRefresh(true);
    fetchCGDCPosts();
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  });
  useEffect(() => {
    fetchCGDCPosts();
  }, [isFocussed, selectedCategory]);
  const onChangeCategory = (value) => {
    setSelectedCategory(value);
    fetchCGDCPosts();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{ color: color.white }}
          onPress={() => onChangeCategory(null)}
        >
          All
        </Text>
        <Text
          style={{ color: color.white }}
          onPress={() => onChangeCategory("internships")}
        >
          internships
        </Text>
        <Text
          style={{ color: color.white }}
          onPress={() => onChangeCategory("fulltime")}
        >
          fulltime
        </Text>
        <Text
          style={{ color: color.white }}
          onPress={() => onChangeCategory("hackathons")}
        >
          hackathons
        </Text>
        <Text
          style={{ color: color.white }}
          onPress={() => onChangeCategory("events")}
        >
          events
        </Text>
      </View>
      {user.role === "cgdc" && (
        <View style={styles.plusIconContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("createCGDCPost")}
          >
            <View style={styles.plusIcon}>
              <MaterialCommunityIcons
                name="plus"
                size={25}
                color={color.white}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      >
        {cgdcPosts?.map((post, index) => (
          <View key={post._id}>
            <CGDCPostCard
              postContent={post.content}
              postImgUri={post.image?.url}
              userImgUri={require("../assets/me.jpeg")}
              userName={post.user.name}
              postId={post._id}
              postLink={post.link}
              createdAt={post.createdAt}
              fetchCGDCPosts={fetchCGDCPosts}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CGDCScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  plusIconContainer: {
    alignItems: "flex-end",
  },
  plusIcon: {
    marginRight: 30,
    backgroundColor: color.danger,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
