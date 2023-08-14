import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Div2,
  Label,
  AccountPageContainer,
  Input,
  Button,
  AccountForm,
  AccountFormContainer,
} from "./AccountStyle";
axios.defaults.withCredentials = true;

const BaseURL = "http://13.124.184.159:8080/user/";

const axiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 5000,
  headers: {
    Authorization: "Token",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

function Login() {
  let navigate = useNavigate();

  const Signup = () => {
    navigate(`/signup`);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();

    const user_data = {
      email: email,
      password: password,
    };

    axiosInstance
      .post("login/", user_data)
      .then((res) => {
        // 서버에서 받아온 리소스 중 access token
        const token = res.data.token;
        axiosInstance.defaults.headers["Authorization"] = "Token " + token;
        localStorage.setItem("token", token);
        console.log(token);
        console.log(res.data);
        navigate(`/`);
      })
      .then(() => {
        axiosInstance.get("data/").then((res) => {
          console.log(res.data.user);
          const user = res.data.user;
          localStorage.setItem("user", user);
        });
      });
  };

  // 토큰 갱신 후에 헤더 변경
  axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");

    if (!token) {
      config.header["access-token"] = null;
      config.header["refresh-token"] = null;
      return config;
    }
    if (config.headers && token) {
      const { accessToken, refreshToken } = JSON.parse(token);
      config.headers["access-token"] = `Bearer ${accessToken}`;
      config.headers["refresh-token"] = `Bearer ${refreshToken}`;
      return config;
    }
  });

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (err) {
      const originalConfig = err.config;

      if (err.repsonse && err.response.status === 401) {
        const refreshToken = originalConfig.headers["refresh-token"];
        try {
          const data = await axios({
            url: "http://user/refresh",
            method: "GET",
            headers: {
              Authorization: refreshToken,
            },
          });
          if (data) {
            localStorage.setItem(
              "token",
              JSON.stringify(data.data, ["accessToken", "refreshToken"])
            );
            return await axiosInstance.request(originalConfig);
          }
        } catch (err) {
          console.log("토큰 갱신 에러");
        }
        return Promise.reject(err);
      }
      return Promise.reject(err);
    }
  );

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <AccountPageContainer className="signin">
        <AccountFormContainer>
          <AccountForm>
            <Label className="label">이메일</Label>
            <Input
              className="user"
              name="user-id"
              value={email}
              required
              onChange={onChangeEmail}
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
            <Button className="button" type="primary" onClick={Login}>
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
