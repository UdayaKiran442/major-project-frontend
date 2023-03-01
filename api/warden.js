import apiInstance from ".";
import * as SecureStorage from "expo-secure-store";

export const wardenLoginApi = (email, password) =>
  apiInstance.post("/warden/warden-login", { email, password });
