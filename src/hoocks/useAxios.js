import axios from "axios";
import axiosConfig from "../config/axiosConfig";

export default function useAxios(setLoading = null) {
  // retrive the token from place stored into.
  const token = "";

  // crate axios instance with global options.
  const axiosInstance = axios.create({
    baseURL: axiosConfig.API_BASE_URL,
    headers: {
      //   ...
    },
  });

  //   configure request before send.
  axiosInstance.interceptors.request.use((config) => {
    // start loader while sending.
    if (setLoading !== null) {
      setLoading(true);
    }

    if (axiosConfig.API_KEY) {
      config.headers["x-api-key"] = axios.config.API_KEY;
    }

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      // stop loader on rretrieved response data.
      if (setLoading !== null) {
        setLoading(false);
      }

      if (response.data.success === false) {
        console.error(response.data.message);
      }

      return response.data;
    },
    (error) => {
      // stop loader on error.
      if (setLoading !== null) {
        setLoading(false);
      }

      // get error message.
      let message =
        error?.response?.data?.message || error?.response?.message || error;

      // show error in console.
      console.error(message);

      // you can show alert with error message here?
      // ...

      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
