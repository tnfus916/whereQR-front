import React from "react";

function KakaoLogin() {
  const Rest_api_key = "271b6b6b673acb0d6daca27769150dbc"; //REST API KEY
  const redirect_uri = "http://localhost:3000/login"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const code = new URL(window.location.href).searchParams.get("code");

  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
}

export default KakaoLogin;
