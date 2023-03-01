import apiInstance from ".";
import * as SecureStorage from "expo-secure-store";

export const raiseGatePassRequestApi = async (
  roomNumber,
  datetimeout,
  datetimein,
  reason
) =>
  apiInstance.post(
    "/gatePass/new-request",
    {
      roomNumber,
      datetimeout,
      datetimein,
      reason,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await SecureStorage.getItemAsync("token")}`,
      },
    }
  );
