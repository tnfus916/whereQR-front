import { useNavigate } from 'react-router-dom';
import {
  AccountPageContainer,
  AccountForm,
  AccountFormContainer,
  ButtonContainer,
} from './AccountStyle';

import kakaoLogin from '../../assets/kakao_login_medium_narrow.png';

// // 쿠키를 주고받기 위해 설정 ( 쿠키가 브라우저에 제대로 저장된 것이 맞는지 확인위함)
// axios.defaults.withCredentials = true;

function Login() {
  // oauth 요청 URL
  const Rest_api_key = import.meta.env.VITE_REST_API_KEY; //REST API KEY
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI; //Redirect URI
  console.log(Rest_api_key);
  console.log(redirect_uri);
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <AccountPageContainer>
        <AccountFormContainer>
          <AccountForm>
            <ButtonContainer>
              <img
                src={kakaoLogin}
                alt="kakaoLogin"
                onClick={handleKakaoLogin}
              />
            </ButtonContainer>
          </AccountForm>
        </AccountFormContainer>
      </AccountPageContainer>
    </>
  );
}

export default Login;
