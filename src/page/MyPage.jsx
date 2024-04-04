import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/api';
import profile from '../assets/profile.png';

function Mypage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('No result');
  const [phonenum, setPhonenum] = useState('No result');

  const handleRegister = () => {
    navigate('/qrscan');
  };

  const handleManage = () => {
    navigate('/qrlist');
  };

  const getMyPost = () => {
    navigate('/mypost');
  };

  const getBookmark = () => {
    navigate('/bookmark');
  };

  useEffect(() => {
    axiosInstance.get('/member/detail').then((res) => {
      console.log(res.data);
      setUsername(res.data.data['username']);
      setPhonenum(res.data.data['phoneNumber']);
    });
  }, []);

  return (
    <>
      <PageContainer>
        <UserContainer>
          <Image src={profile} />
          <UserInfoTextContainer>
            <Text className="name">{username}</Text>
            <Text>{phonenum}</Text>
          </UserInfoTextContainer>
          <Button>프로필 수정</Button>
        </UserContainer>
        <MenuContainer>
          <ItemContainer>
            <Title>QR</Title>
            <ItemList>
              <Text onClick={handleRegister}>QR 코드 등록</Text>
              <Text onClick={handleManage}>QR 코드 관리</Text>
            </ItemList>
          </ItemContainer>
          <ItemContainer>
            <Title>게시판</Title>
            <ItemList>
              <Text onClick={getMyPost}>내 게시글 관리</Text>
              <Text onClick={getBookmark}>게시글 즐겨찾기</Text>
            </ItemList>
          </ItemContainer>
          <ItemContainer>
            <Title>기타</Title>
            <ItemList>
              <Text>회원탈퇴</Text>
              <Text>로그아웃</Text>
            </ItemList>
          </ItemContainer>
        </MenuContainer>
      </PageContainer>
    </>
  );
}

export default Mypage;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f5;
`;

export const UserContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  margin-bottom: 15px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 80px;
  height: 60px;
  margin: 15px;
  border: none;
`;

export const UserInfoTextContainer = styled.div`
  width: 80%;
`;

export const Text = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.2rem;
  padding: 5px;
  &.name {
    font-weight: 600;
    font-size: 1.5rem;
    color: rgb(36, 114, 250);
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  flex-direction: column;
  border-radius: 3px;
  background-color: rgb(117, 168, 255);
  border: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 20px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 10px 0 15px 25px;
  border-bottom: 1.9px solid #f4f4f5;
`;

export const ItemList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 15px 25px;
`;

export const QRImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
`;
