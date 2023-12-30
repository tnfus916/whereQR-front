import axios from 'axios';
import { useState , useEffect} from 'react';

function KakaoLogin() {
  const [kakaoAccessToken, setKakaoAccessToken] = useState(null);
  const [kakaoId, setKakaoId] = useState(null);
  const [username, setUsername] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    const codeFromUrl = new URL(document.location).searchParams.get('code');

    console.log('axios params', { params: { code: codeFromUrl } });
    axiosInstance
    .get('/member/kakao/token', { params: { code: codeFromUrl} })
    .then((res) => {
      console.log(res);
      console.log(res.data.status);
      if (res.data.status === 'SUCCESS') {
        setKakaoAccessToken(res.data.accessToken);
        console.log('kakaoAccessToken', kakaoAccessToken);
      } else {
        console.log('error');
        window.alert(res.data.message);
      }
    })
    .catch((err) => {
      console.log('get kakao token error', err);
    });
  }, []);
  

  return <div>KakaoLogin</div>;
}

export default KakaoLogin;
