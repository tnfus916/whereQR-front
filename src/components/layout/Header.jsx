import { useEffect, useState } from "react";
import { HeaderContainer, NavLink, NavContainer, Button } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    setInterval(() => {
      const token = localStorage.getItem("token");
      setUser(token);
    }, 5000);
  }, []);

  const handleChat = () => {
    navigate("/chatlist");
  };

  const handleLogout = () => {
    // console.log(localStorage.getItem("token"));
    console.log("logout을 진행");
    localStorage.removeItem("token");
    // localStorage.removeItem("user");
    navigate("/");
  };
  if (!user) {
    return (
      <HeaderContainer>
        <img src={logo} height="20" />
        <NavLink to="/">whereQR</NavLink>
        <NavContainer>
          <NavLink to="/login">로그인</NavLink>
        </NavContainer>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <img src={logo} height="20" />
        <NavLink to="/">whereQR</NavLink>
        <NavContainer>
          <Button onClick={handleLogout}>로그아웃</Button>
        </NavContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
