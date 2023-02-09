import * as SecureStore from "expo-secure-store";

const authKey = "token";

export const setToken = async (value) => {
  try {
    await SecureStore.setItemAsync("token", value);
  } catch (error) {
    console.log("SetTokenError:", error);
  }
};

export const getToken = async () => {
  try {
    await SecureStore.getItemAsync("token");
  } catch (error) {
    console.log("SetTokenError:", error);
  }
};

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync("token");
  } catch (error) {
    console.log("RemoveTokenError:", error);
  }
};
