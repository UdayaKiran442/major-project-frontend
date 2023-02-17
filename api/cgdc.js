import apiInstance from ".";
import * as SecureStorage from "expo-secure-store";

export const createCGDCPostApi = async (content, link, category, image) =>
  apiInstance.post(
    "/posts/new-post",
    { content, link, category, image },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await SecureStorage.getItemAsync("token")}`,
      },
    }
  );

export const getCGDCPostsApi = async () =>
  apiInstance.post(
    "/posts",
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
