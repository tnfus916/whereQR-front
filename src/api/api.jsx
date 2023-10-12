import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://27.96.130.127:8080",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
