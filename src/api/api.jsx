import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {
    Authorization: "Token",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
