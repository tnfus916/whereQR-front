import styled from 'styled-components';
import { useMatch, useNavigate } from 'react-router-dom';

import qr from '../../assets/qr_icon.svg';
import qr_clicked from '../../assets/qr_clicked.svg';
import dashboard from '../../assets/dashboard_icon.svg';
import dashboard_clicked from '../../assets/dashboard_clicked.svg';
import home from '../../assets/home_icon.svg';
import home_clicked from '../../assets/home_clicked.svg';
import chat from '../../assets/chat_icon.svg';
import chat_clicked from '../../assets/chat_clicked.svg';
import mypage from '../../assets/my_icon.svg';
import mypage_clicked from '../../assets/my_clicked.svg';

function NavigationBar() {
  const navigate = useNavigate();
  const isQRScan = useMatch('/qrscan');
  const isDashboard = useMatch('/dashboard');
  const isHome = useMatch('/');
  const isChat = useMatch('/chatlist');
  const isMypage = useMatch('/mypage');

  const getCamera = () => {
    console.log('QR 스캔');
    navigate('/qrscan'); // 카메라 권한 허용
  };

  const getDashboard = () => {
    console.log('대시보드');
    navigate('/dashboard');
  };

  const getHome = () => {
    console.log('홈');
    navigate('/');
  };

  const getChat = () => {
    if (localStorage.getItem('accessToken') === null) {
      // alert('로그인이 필요합니다.');
      navigate('/login');
    } else {
      console.log('채팅');
      navigate('/chatlist');
    }
  };

  const getMypage = () => {
    if (localStorage.getItem('accessToken') === null) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    } else {
      console.log('마이페이지');
      navigate('/mypage');
    }
  };

  return (
    <BarContainer>
      <IconContainer onClick={getCamera}>
        {isQRScan ? <img src={qr_clicked} alt="" /> : <img src={qr} alt="" />}
        <Text>QR 스캔</Text>
      </IconContainer>
      <IconContainer onClick={getDashboard}>
        {isDashboard ? (
          <img src={dashboard_clicked} alt="" />
        ) : (
          <img src={dashboard} alt="" />
        )}
        <Text>대시보드</Text>
      </IconContainer>
      <IconContainer onClick={getHome}>
        {isHome ? <img src={home_clicked} alt="" /> : <img src={home} alt="" />}
        <Text>홈</Text>
      </IconContainer>
      <IconContainer onClick={getChat}>
        {isChat ? <img src={chat_clicked} alt="" /> : <img src={chat} alt="" />}
        <Text>채팅</Text>
      </IconContainer>
      <IconContainer onClick={getMypage}>
        {isMypage ? (
          <img src={mypage_clicked} alt="" />
        ) : (
          <img src={mypage} alt="" />
        )}
        <Text>마이</Text>
      </IconContainer>
    </BarContainer>
  );
}

export default NavigationBar;

const BarContainer = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: white;
`;

const IconContainer = styled.div`
  width: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
  }
`;

const Text = styled.div`
  font-size: 10px;
  font-weight: bold;
  margin-top: 8px;
`;
