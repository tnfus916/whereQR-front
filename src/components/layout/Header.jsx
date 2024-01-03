import { useEffect, useState } from 'react';
import { HeaderContainer, NavLink, NavContainer, Button } from './HeaderStyle';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('refreshToken');
    if (token) {
      setIsLogin(true);
      console.log(token);
    }
  });

  const handleLogout = () => {
    console.log('logout을 진행');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    setIsLogin(false);
    navigate('/');
  };
  if (!isLogin) {
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
