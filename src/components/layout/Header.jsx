import React, { useEffect, useState } from "react";
import { HeaderContainer, NavLink, NavContainer, Button } from "./HeaderStyle";
import axios from "axios";

const BaseURL = "http://localhost:8080/user/";

const axiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 5000,
  headers: {
    Authorization: "Token ",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    setInterval(() => {
      const token = localStorage.getItem("token");
      setUser(token);
    }, 5000);
  }, []);

  const Logout = () => {
    console.log(localStorage.getItem("token"));
    axiosInstance.defaults.headers["Authorization"] = "Token " + user;
    axiosInstance.post("logout/").then(() => {
      console.log("logout을 진행");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      axiosInstance.defaults.headers["Authorization"] = null;
    });
  };
  if (!user) {
    return (
      <HeaderContainer>
        <NavLink to="/">whereQR</NavLink>
        <NavContainer>
          <NavLink to="/signup">회원가입</NavLink>
          <NavLink to="/signin">로그인</NavLink>
          <NavLink to="/qrscan">분실물 신고</NavLink>
        </NavContainer>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <NavLink to="/">whereQR</NavLink>
        <NavContainer>
          <NavLink to="/qrscan">분실물 신고</NavLink>
          <NavLink to="/mypage">마이페이지</NavLink>
          <Button onClick={Logout}>로그아웃</Button>
        </NavContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
