import { useEffect, useState } from "react";
import { HeaderContainer, NavLink, NavContainer, Button } from "./HeaderStyle";
import axiosInstance from "../../api/api";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    setInterval(() => {
      const token = localStorage.getItem("token");
      setUser(token);
    }, 5000);
  }, []);

  const handleLogout = () => {
    console.log(localStorage.getItem("token"));
    console.log("logout을 진행");
    localStorage.removeItem("token");
    // localStorage.removeItem("user");
    navigate("/");
  };
  if (!user) {
    return (
      <HeaderContainer>
        <NavLink to="/">whereQR</NavLink>
        <NavContainer>
          <NavLink to="/signup">회원가입</NavLink>
          <NavLink to="/login">로그인</NavLink>
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
          <Button onClick={handleLogout}>로그아웃</Button>
        </NavContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
