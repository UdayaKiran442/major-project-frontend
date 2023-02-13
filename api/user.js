import apiInstance from ".";
import * as SecureStorage from "expo-secure-store";

export const loginApi = (email, password) =>
  apiInstance.post("/users/login-user", { email, password });

export const newUserApi = (name, email, password, phone) =>
  apiInstance.post(
    "/users/new-user",
    { name, email, password, phone },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
export const saveOTPApi = (userId) =>
  apiInstance.post(
    "/users/send-otp",
    { userId },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const verifyOtpApi = (userId, OTP) =>
  apiInstance.post(
    `/users/verify-user/${userId}`,
    { OTP },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const updatePasswordApi = async (
  password,
  newPassword,
  confirmNewPassword
) =>
  apiInstance.post(
    "/users/reset-password",
    { password, newPassword, confirmNewPassword },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await SecureStorage.getItemAsync("token")}`,
      },
    }
  );

export const forgotPasswordApi = async (email) =>
  apiInstance.post(
    "/users/forgot-password",
    { email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const verifyForgotPasswordOTPApi = async (email, OTP) =>
  apiInstance.post(
    "/users/forgot-password/verify-otp",
    { email, OTP },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const resetForgotPasswordApi = async (
  email,
  newPassword,
  confirmNewPassword
) =>
  apiInstance.post(
    "/users/reset-forgot-password",
    { email, newPassword, confirmNewPassword },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
