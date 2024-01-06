import styled from 'styled-components';
import qrscan from '../../assets/qrscan.png';
import dashboard from '../../assets/dashboard.png';
import home from '../../assets/home.png';
import chat from '../../assets/chat.png';
import mypage from '../../assets/mypage.png';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

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
    console.log('채팅');
    navigate('/chat');
  };

  const getMypage = () => {
    console.log('마이페이지');
    navigate('/mypage');
  };

  return (
    <BarContainer>
      <IconContainer onClick={getCamera}>
        <img src={qrscan} alt="" />
        <Text>QR 스캔</Text>
      </IconContainer>
      <IconContainer onClick={getDashboard}>
        <img src={dashboard} alt="" />
        <Text>대시보드</Text>
      </IconContainer>
      <IconContainer onClick={getHome}>
        <img src={home} alt="" />
        <Text>홈</Text>
      </IconContainer>
      <IconContainer onClick={getChat}>
        <img src={chat} alt="" />
        <Text>채팅</Text>
      </IconContainer>
      <IconContainer onClick={getMypage}>
        <img src={mypage} alt="" />
        <Text>마이</Text>
      </IconContainer>
    </BarContainer>
  );
}

export default NavigationBar;

const BarContainer = styled.div`
  width: 100%;
  height: 70px;
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
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 5px;
`;
