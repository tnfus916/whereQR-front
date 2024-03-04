import { useNavigate } from 'react-router-dom';
import {
  AccountPageContainer,
  AccountForm,
  AccountFormContainer,
  ButtonContainer,
} from './AccountStyle';

import kakaoLogin from '../../assets/kakao_login_medium_narrow.png';

function Login() {
  // oauth 요청 URL
  const Rest_api_key = import.meta.env.VITE_REST_API_KEY;
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
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
