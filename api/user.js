import apiInstance from ".";

export const loginApi = (email, password) =>
  apiInstance.post("/users/login-user", { email, password });
