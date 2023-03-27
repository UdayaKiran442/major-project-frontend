import apiInstance from ".";
import { getToken } from "../storage/storage";

export const wardenLoginApi = (email, password) =>
  apiInstance.post("/warden/warden-login", { email, password });

export const acceptGatePassRequestApi = async (id) =>
  apiInstance.post(
    `/gatePass/accept-request/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );
export const rejectGatePassRequestApi = async (id) =>
  apiInstance.post(
    `/gatePass/reject-request/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );
