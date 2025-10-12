import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tptc.com.sa/sh/v16/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
