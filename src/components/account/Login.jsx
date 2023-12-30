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
  const Rest_api_key = '271b6b6b673acb0d6daca27769150dbc'; //REST API KEY
  const redirect_uri = 'http://27.96.130.127:3000/kakaologin'; //Redirect URI
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
