import apiInstance from ".";
import { getToken } from "../storage/storage";

export const facultyLoginApi = (email, password) =>
  apiInstance.post(
    "/faculty/faculty-login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const getFacultyFreeSlotsApi = (facultyId) =>
  apiInstance.post(
    "/faculty/get-freetime",
    { facultyId },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
