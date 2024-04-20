import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/logo.png';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 0 10px 0 rgba(36, 114, 250, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  position: fixed;
  left: 0;
  margin-left: 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.7rem;
  position: fixed;
  right: 0;
  margin-right: 10px;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavLink = styled(Link)`
  color: rgb(36, 114, 250);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.4rem;
  height: 20px;
  position: fixed;
  left: 100;

  /* cursor: pointer;
  &.active {
    color: #15cdfc;
  } */
`;

export const Button = styled.button`
  border: none;
  /* color: orange; */
  color: rgb(36, 114, 250);
  font-size: 0.7rem;
  font-weight: 700;
  background-color: white;
  white-space: nowrap;
`;

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [title, setTitle] = useState('whereQR');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogin = () => {
    console.log('login을 진행');
    navigate('/login');
  };

  const handleLogout = () => {
    console.log('logout을 진행');
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
        <LogoContainer>
          <img src={logo} height="20" />
        </LogoContainer>
        <NavLink to="/">{title}</NavLink>
        <NavContainer>
          <Button onClick={handleLogin}>로그인</Button>
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
