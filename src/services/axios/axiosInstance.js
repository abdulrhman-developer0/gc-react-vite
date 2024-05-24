import axios from "axios";

const token = "";

const axiosInstance = axios.create({
  baseURL: "https://example.com/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
