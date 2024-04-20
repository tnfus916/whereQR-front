import { useEffect } from "react";

import axiosInstance from "../../services/axios";

function KakaoLogin() {
  useEffect(() => {
    const LoginLogic = async () => {
      const codeFromUrl = new URL(document.location).searchParams.get("code");

      const kakaoTokenRes = await axiosInstance.get("/member/kakao/token", {
        params: { code: codeFromUrl },
      });

      if (kakaoTokenRes.data.status === "SUCCESS") {
        const idRes = await axiosInstance.get("/member/kakao/me", {
          params: { accessToken: kakaoTokenRes.data.data.accessToken },
        });

        if (idRes.data.status === "SUCCESS") {
          // 카카오 id를 이용한 자체 로그인 ----------------------------------------------
          const loginRes = await axiosInstance.post(
            "member/kakao/login",
            null,
            { params: { kakaoId: idRes.data.data.kakaoId } }
          );
          // 로그인 성공시 토큰 저장------------------------------------------------------
          console.log("token in ");
          if (loginRes.data.status === "SUCCESS") {
            localStorage.setItem("accessToken", loginRes.data.data.accessToken);
            window.location.href = "/";
          } else {
            if (loginRes.data.data.errorType === "NOT_FOUND") {
              window.alert(
                "가입 정보가 없습니다. 회원가입 페이지로 이동합니다."
              );
              const kakaoId = idRes.data.data.kakaoId;
              const username = idRes.data.data.nickname;
              window.location.href = `/signup?kakaoid=${kakaoId}&username=${username}`;
            }
          }
        } else {
          console.log("카카오 id 받아오기 실패");
          window.location.href = "/login";
        }
      } else {
        console.log("카카오 토큰 받아오기 실패");
        window.location.href = "/login";
      }
    };

    LoginLogic();
  }, []);

  return <></>;
}

export default KakaoLogin;
