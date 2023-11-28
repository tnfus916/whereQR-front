import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AccountPageContainer,
  AccountForm,
  AccountFormContainer,
  ButtonContainer,
} from "./AccountStyle";

import kakaoLogin from "../../assets/kakao_login_medium_narrow.png";

// // 쿠키를 주고받기 위해 설정 ( 쿠키가 브라우저에 제대로 저장된 것이 맞는지 확인위함)
// axios.defaults.withCredentials = true;

function Login({}) {
  // oauth 요청 URL
  const Rest_api_key = "271b6b6b673acb0d6daca27769150dbc"; //REST API KEY
  const redirect_uri = "http://localhost:3000"; //Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const [kakaoAccessToken, setKakaoAccessToken] = useState(null);
  const [kakaoId, setKakaoId] = useState(null);
  const [username, setUsername] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const axiosInstance = axios.create({
    baseURL: "http://27.96.130.127:8080",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleLogin = () => {
    window.location.href = kakaoURL;
    const code = new URL(window.location.href).searchParams.get("code");

    // 카카오 토큰 받아오기
    axiosInstance
      .get("/member/kakao/token", code)
      .then((res) => {
        setKakaoAccessToken(res.data.accessToken);
      })
      .catch((err) => {
        console.log("get kakao token error", err);
      });

    // 카카오 아이디와 이름 받아오기
    axiosInstance
      .get("/member/kakao/me", kakaoAccessToken)
      .then((res) => {
        setKakaoId(res.data.id);
        setUsername(res.data.kakao_account.profile.nickname);
      })
      .catch((err) => {
        console.log("get kakaoId and username error", err);
      });

    // 카카오 아이디로 로그인
    axiosInstance
      .post("member/kakao/login", kakaoId)
      .then((res) => {
        if (res.data.errorType === "NOT_FOUND") {
          window.location.href = `/signup?kakaoid=${kakaoId}&username=${username}`; // 회원가입 페이지로 이동
        } else if (res.data.errorType === "TokenExpiredException") {
          // 토큰 만료시 토큰 재발급
          axios
            .post("/member/auth/refresh", localStorage.getItem("token"))
            .then((res) => {
              setAccessToken(res.data.accessToken);
              localStorage.setItem("token", res.data.refreshToken);
            });
        } else {
          setAccessToken(res.data.accessToken);
          localStorage.setItem("token", res.data.refreshToken);
        }
      })
      .catch((err) => {
        console.log("whereqr login error", err);
      });
  };

  return (
    <>
      <AccountPageContainer className="signin">
        <AccountFormContainer>
          <AccountForm>
            <ButtonContainer>
              <img src={kakaoLogin} alt="kakaoLogin" onClick={handleLogin} />
            </ButtonContainer>
          </AccountForm>
        </AccountFormContainer>
      </AccountPageContainer>
    </>
  );
}

export default Login;
