import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://10.7.2.154:3001/api/v1",
  headers: {
    // "Content-Type": "multipart/form-data",
  },
});

export default apiInstance;
