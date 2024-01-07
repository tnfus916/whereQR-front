import { useEffect, useState } from 'react';
import {
  HeaderContainer,
  NavLink,
  NavContainer,
  Button,
  LogoContainer,
} from './HeaderStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [title, setTitle] = useState('whereQR');

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

  useEffect(() => {
    const newTitle = getPageTitleForPath(location.pathname);
    console.log(newTitle);
    setTitle(newTitle);
  }, [location.pathname]);

  const getPageTitleForPath = (pathname) => {
    switch (pathname) {
      case '/':
        return 'whereQR';
      case '/chatlist':
        return '채팅';
      case '/dashboard':
        return '대시보드';
      case '/mypage':
        return '마이페이지';
      default:
        return 'whereQR';
    }
  };

  if (!isLogin) {
    return (
      <HeaderContainer>
        <img src={logo} height="20" />
        <NavLink to="/">{title}</NavLink>
        <NavContainer>
          <NavLink to="/login">로그인</NavLink>
        </NavContainer>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <LogoContainer>
          <img src={logo} height="20" />
        </LogoContainer>
        <NavLink to="/">{title}</NavLink>
        <NavContainer>
          <Button onClick={handleLogout}>로그아웃</Button>
        </NavContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
