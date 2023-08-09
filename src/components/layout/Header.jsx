import React, { useEffect, useState } from "react";
import { HeaderContainer, NavLink, NavContainer } from "./HeaderStyle";
import axios from "axios";

const BaseURL = "http://127.0.0.1:8080/user/";

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
  const [user, setUser] = useState({});

  useEffect(() => {
    setInterval(() => {
      const token = localStorage.getItem("token");
      setUser(token);
    }, []);
  }, 5000);

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
        <NavLink to="/">
          <h1>whereQR</h1>
        </NavLink>
        <NavContainer>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/signin">SIgn in</NavLink>
          <NavLink to="/scan">Scan</NavLink>
        </NavContainer>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <NavLink to="/">
          <h1>whereQR</h1>
        </NavLink>
        <NavContainer>
          <NavLink to="/mypage">MyPage</NavLink>
          {/* <button onClick={Logout}>Logout</button> */}
          <NavLink to="/qrscan">Scan</NavLink>
        </NavContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
