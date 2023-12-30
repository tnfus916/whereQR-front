import axios from 'axios';
import { useState, useEffect } from 'react';

function KakaoLogin() {
  const [kakaoAccessToken, setKakaoAccessToken] = useState(null);
  const [kakaoId, setKakaoId] = useState(null);
  const [username, setUsername] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [code, setCode] = useState(null);
  

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    const codeFromUrl = new URL(document.location).searchParams.get('code');
    setCode(codeFromUrl);

  // 카카오 토큰 받아오기
    axiosInstance
      .get('/member/kakao/token', { params: { code: codeFromUrl} })
      .then((res) => {
        console.log(res);
        console.log(res.data.status);
        if (res.data.status === 'SUCCESS') {
          console.log("kakao accessToken", res.data.data.accessToken)
          setKakaoAccessToken(res.data.data.accessToken);
        } else {
          console.log('error');
          // window.alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log('get kakao token error', err);
      });
  }, []);

  axiosInstance
  .get('/member/kakao/me', { params: { accessToken: kakaoAccessToken } })
  .then((res) => {
    console.log(res);
    console.log(res.data.data.kakaoId);

    if (res.data.status === 'SUCCESS') {
      console.log("get kakao id -> success");
      const kakaoIdTemp = res.data.data.kakaoId;
      setKakaoId(res.data.data.kakaoId);
      setUsername(res.data.data.nickname);

      // Return a promise to chain the next `.then` block
      console.log(kakaoIdTemp);
      return axiosInstance.post('member/kakao/login', null, { params: { kakaoId: kakaoIdTemp } })
    } else {
      console.log('error');
      // window.alert(res.data.message);
    }
  })
  .then((res) => {
    console.log(res);
    if (res.data.status ==="FAILED" && res.data.data.errorType === 'NOT_FOUND') {
      window.location.href = `/signup?kakaoid=${kakaoId}&username=${username}`; // 회원가입 페이지로 이동
    } else if (res && res.data.errorType === 'TokenExpiredException') {
      // 토큰 만료시 토큰 재발급
      axios
        .post('/member/auth/refresh', localStorage.getItem('refreshToken'))
        .then((res) => {
          setAccessToken(res.data.accessToken);
          localStorage.setItem('token', res.data.refreshToken);
        });
    } else if (res) {
      setAccessToken(res.data.data.accessToken);
      localStorage.setItem('refreshToken', res.data.data.refreshToken);
    }
  })
  .catch((err) => {
    console.log('whereqr login error', err);
  });
  return <div>KakaoLogin</div>;
}

export default KakaoLogin;
