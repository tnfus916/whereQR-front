import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/api';

function KakaoLogin() {
  const navigate = useNavigate();

  const [kakaoAccessToken, setKakaoAccessToken] = useState(null);
  const [kakaoId, setKakaoId] = useState(null);
  const [username, setUsername] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    const LoginLogic = async () => {
      const codeFromUrl = new URL(document.location).searchParams.get('code');
      setCode(codeFromUrl);

      // 카카오 토큰 받아오기------------------------------------------------------------
      const kakaoTokenRes = await axiosInstance.get('/member/kakao/token', {
        params: { code: codeFromUrl },
      });

      if (kakaoTokenRes.data.status === 'SUCCESS') {
        console.log('kakao accessToken', kakaoTokenRes.data.data.accessToken);
        setKakaoAccessToken(kakaoTokenRes.data.data.accessToken);

        // 카카오 토큰을 이용해 카카오 username, id 받아오기 -----------------------------
        const idRes = await axiosInstance.get('/member/kakao/me', {
          params: { accessToken: kakaoTokenRes.data.data.accessToken },
        });

        if (idRes.data.status === 'SUCCESS') {
          console.log('kakao id', idRes.data.data.kakaoId);
          setKakaoId(idRes.data.data.kakaoId);
          setUsername(idRes.data.data.nickname);

          // 카카오 id를 이용한 자체 로그인 ----------------------------------------------
          const loginRes = await axiosInstance.post(
            'member/kakao/login',
            null,
            {
              params: { kakaoId: idRes.data.data.kakaoId },
            }
          );
          // 로그인 성공시 토큰 저장------------------------------------------------------
          if (lodinRes.data.status === 'SUCCESS' && loginRes) {
            setAccessToken(loginRes.data.data.accessToken);
            localStorage.setItem('accessToken', loginRes.data.data.accessToken);
            localStorage.setItem(
              'refreshToken',
              loginRes.data.data.refreshToken
            );
            navigate('/');
          }
        } else {
          console.log('카카오 id 받아오기 실패');
        }
      } else {
        console.log('카카오 토큰 받아오기 실패');
      }
    };

    LoginLogic();
  }, []);

  return <div>KakaoLogin</div>;
}

export default KakaoLogin;
