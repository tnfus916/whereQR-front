import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import axiosInstance from "../../api/api";
import {
  Label,
  AccountPageContainer,
  Input,
  Button,
  AccountForm,
  AccountFormContainer,
} from "./AccountStyle";

// // 쿠키를 주고받기 위해 설정 ( 쿠키가 브라우저에 제대로 저장된 것이 맞는지 확인위함)
// axios.defaults.withCredentials = true;

function Login() {
  let navigate = useNavigate();

  const Signup = () => {
    navigate(`/signup`);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const user_data = {
      username: username,
      password: password,
    };

    axiosInstance
      .post("/member/login", user_data)
      .then((res) => {
        // 서버에서 받아온 리소스 중 access token
        console.log(res);
        const token = res.data.accessToken;
        console.log(token);
        axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
        console.log(axiosInstance.defaults.headers["Authorization"]);
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.log(error);
      });
    // .then(() => {
    //   axiosInstance.get("data/").then((res) => {
    //     console.log(res.data.user);
    //     const user = res.data.user;
    //     localStorage.setItem("user", user);
    //   });
    // });
  };

  // // 토큰 갱신 후에 헤더 변경
  // axiosInstance.interceptors.request.use(function (config) {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     console.log(config.headers);
  //     config.headers["access-token"] = null;
  //     config.headers["refresh-token"] = null;
  //     return config;
  //   }
  //   if (config.headers && token) {
  //     const { accessToken, refreshToken } = JSON.parse(token);
  //     config.headers["access-token"] = `Bearer ${accessToken}`;
  //     config.headers["refresh-token"] = `Bearer ${refreshToken}`;
  //     return config;
  //   }
  // });

  // axiosInstance.interceptors.response.use(
  //   // 200번대 정상적인 응답이 들어올 경우
  //   function (response) {
  //     return response;
  //   },

  //   async function (err) {
  //     console.log(err);
  //     // const originalConfig = err.config;

  //     // if (err.repsonse && err.response.status === 401) {
  //     //   const refreshToken = originalConfig.headers["refresh-token"];
  //     //   try {
  //     //     const data = await axios({
  //     //       url: "http://user/refresh",
  //     //       method: "GET",
  //     //       headers: {
  //     //         Authorization: refreshToken,
  //     //       },
  //     //     });
  //     //     if (data) {
  //     //       localStorage.setItem(
  //     //         "token",
  //     //         JSON.stringify(data.data, ["accessToken", "refreshToken"])
  //     //       );
  //     //       return await axiosInstance.request(originalConfig);
  //     //     }
  //     //   } catch (err) {
  //     //     console.log("토큰 갱신 에러");
  //     //   }
  //     //   return Promise.reject(err);
  //     // }
  //     // return Promise.reject(err);
  //   }
  // );

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <AccountPageContainer className="signin">
        <AccountFormContainer>
          <AccountForm>
            <Label className="label">아이디</Label>
            <Input
              className="user"
              name="user-id"
              value={username}
              required
              onChange={onChangeUsername}
            />
            <br />
            <Label className="label">비밀번호</Label>
            <Input
              className="user"
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
            <br />
            <Button className="button" type="primary" onClick={handleLogin}>
              로그인
            </Button>
            <Button className="button" type="primary" onClick={Signup}>
              회원가입
            </Button>
          </AccountForm>
        </AccountFormContainer>
      </AccountPageContainer>
    </>
  );
}

export default Login;
