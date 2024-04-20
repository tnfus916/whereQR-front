import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URI,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: 'true',
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }

    return config;
  },
  (error) => {
    // 요청 에러 처리
    console.log("error", error);
    return error;
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  async (response) => {
    if (response.data.status === "FAILED") {
      if (response.data.data.errorType === "UNAUTHORIZED") {
        console.log("토큰 만료");
        const res = axiosInstance.post("/member/auth/refresh");
        if (res.data.status === "SUCCESS") {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          window.location.reload(); // 새로고침
        } else {
          localStorage.removeItemItem("accessToken", res.data.data.accessToken);
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          window.location.href = "/login";
        }
      } else {
        window.location.href = '/';
      }
    }
    return response;
  },
  async (error) => {
    // 2xx 범위 외의 상태 코드는 기타 에러 처리
    return Promise.reject(error);
  }
);

export default axiosInstance;
