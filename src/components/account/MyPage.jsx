import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/api';

function Mypage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('No result');
  const [phonenum, setPhonenum] = useState('No result');

  const handleRegister = () => {
    navigate('/qrsave');
  };

  const handleManage = () => {
    navigate('/qrlist');
  };

  useEffect(() => {
    axiosInstance.defaults.headers[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('accessToken')}`;

    axiosInstance.get('/member/detail').then((res) => {
      console.log(res.data);
      setUsername(res.data.data['username']);
      setPhonenum(res.data.data['phoneNumber']);
    });
  }, []);

  return (
    <>
      <PageContainer>
        <UserInfoContainer>
          <TitleContainer>
            <Title>내 정보</Title>
          </TitleContainer>
          <UserInfo>
            <Image />
            <UserInfoTextContainer>
              <Text>user: {username}</Text>
              <Text>phone: {phonenum}</Text>
            </UserInfoTextContainer>
            <Button>수정</Button>
          </UserInfo>
        </UserInfoContainer>
        <ContentContainer>
          <ItemContainer>
            <TitleContainer>
              <Title>QR</Title>
            </TitleContainer>
            <TextContainer>
              <Text onClick={handleRegister}>QR 코드 등록</Text>
              <Text onClick={handleManage}>QR 코드 관리</Text>
            </TextContainer>
          </ItemContainer>
          <ItemContainer>
            <TitleContainer>
              <Title>게시판</Title>
            </TitleContainer>
            <TextContainer>
              <Text>내 게시글 관리</Text>
              <Text>게시글 즐겨찾기</Text>
            </TextContainer>
          </ItemContainer>
          <ItemContainer>
            <TitleContainer>
              <Title>기타</Title>
            </TitleContainer>
            <TextContainer>
              <Text>회원탈퇴</Text>
              <Text>로그아웃</Text>
            </TextContainer>
          </ItemContainer>
        </ContentContainer>
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
  margin-top: 50px;
  background-color: #f4f4f5;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
`;

export const UserInfo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 10px;
  background-color: #dcdcdc;
`;

export const UserInfoTextContainer = styled.div`
  width: 80%;
`;

export const TextContainer = styled.div`
  width: 100%;
`;

export const Text = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.2rem;
  /* font-weight: bold; */
  padding: 10px;
`;

export const Button = styled.button`
  width: 15%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  flex-direction: column;
  border-radius: 20%;
  background-color: rgb(111, 164, 255);
  border: none;
  font-size: bold;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const ItemContainer = styled.div`
  width: 100%;
  font-size: 1rem;
  padding: 25px 0 0 20px;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dcdcdc;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ListItem = styled.div`
  width: 100%;
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(36, 114, 250);
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(36, 114, 250, 0.2);
  margin: 5px;
  padding: 20px;
  font-size: 0.7rem;
`;

export const Item = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.8rem;
  /* font-weight: bold; */
`;

export const ButtonContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const LongButton = styled.button`
  height: 25px;
  width: 100px;
  border: none;
  border-radius: 10px;
  background-color: #ffdd9e;
  box-shadow: 0 0 10px 0 rgba(255, 148, 60, 0.4);
  /* margin: 10px; */
  font-size: 0.4rem;
  margin-top: 15px;
`;

export const ShortButton = styled.button`
  height: 20px;
  width: 40px;
  border: none;
  border-radius: 10px;
  background-color: #ffdd9e;
  box-shadow: 0 0 10px 0 rgba(255, 148, 60, 0.4);
  margin: 3px;
  padding: 2px;
  font-size: 0.5rem;
`;

export const QRImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
`;
