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
    const accessToken = localStorage.getItem('accessToken'); //tmp 
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    // Refresh 토큰을 보낼 경우 사용하고자 하는 커스텀 인증 헤더를 사용하면 된다.
    if (refreshToken) {
      config.headers['x-refresh-token'] = refreshToken;
    }

    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.status === 'FAILED') {
      console.log('failed');
      if (response.data.data.errorType === 'TokenExpiredException') {
        // 토큰 만료시 토큰 재발급
        axios
          .post('/member/auth/refresh', localStorage.getItem('refreshToken'))
          .then((res) => {
            localStorage.setItem('refreshToken', res.data.data.refreshToken);
          });
      } else if (response.data.data.errorType === 'NOT_FOUND') {
        window.alert('가입 정보가 없습니다. 회원가입 페이지로 이동합니다.');
        const kakaoId = localStorage.getItem('kakaoId');
        const username = localStorage.getItem('username');
        window.location.href = `/signup?kakaoid=${kakaoId}&username=${username}`;
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
