import apiInstance from ".";
import { getToken } from "../storage/storage";

export const loginApi = (email, password) =>
  apiInstance.post("/users/login-user", { email, password });

export const newUserApi = (
  name,
  email,
  password,
  phone,
  public_id,
  secure_url
) =>
  apiInstance.post(
    "/users/new-user",
    { name, email, password, phone, public_id, secure_url },
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
        Authorization: `Bearer ${await getToken()}`,
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

export const searchFacultyApi = async (keyword) =>
  apiInstance.post(`/faculty/all?keyword=${keyword}`);
