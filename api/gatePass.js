import apiInstance from ".";
import { getToken } from "../storage/storage";

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
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );

export const getStudentGatePassRequestApi = async () =>
  apiInstance.post(
    "/users/get-gate-passes-id",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );
export const getWardenGatePassRequestApi = async () =>
  apiInstance.post(
    "/warden/warden-gate-pass",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );
