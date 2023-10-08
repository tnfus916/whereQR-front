import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

function Mypage() {
  // const user = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const BaseURL = "http://localhost:8080/qrcode";

  const axiosInstance = axios.create({
    baseURL: BaseURL,
    timeout: 5000,
    headers: {
      Authorization: "Token",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

  useEffect(() => {
    axiosInstance
      .get("/qrcode-list/", { params: { key: user } })
      .then((res) => {
        console.log(res.data);
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addClick = () => {
    navigate("/qrsave");
  };

  const editClick = () => {
    navigate("/qredit/:id");
  };

  const deleteClick = () => {
    window.alert(
      "qr코드를 정말 삭제하시겠습니까?\n삭제된 qr코드는 복구할 수 없습니다."
    );

    axiosInstance
      .delete("qrcode/qrlist/", { params: { user: user } })
      .then((res) => {
        console.log(res.data);
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const id = "sdewr8dfsdfjs";
  return (
    <>
      <PageContainer>
        <UserInfoContainer>
          <Title>회원정보</Title>
          <ListItem>
            <ItemContainer>
              <div>image:</div>
              <div>id:{id}</div>
              <div>title: </div>
              <div>memo: sd</div>
            </ItemContainer>
          </ListItem>
        </UserInfoContainer>
        <TitleContainer>
          <Title>QR code 목록</Title>
          <LongButton onClick={addClick}>QR code 등록</LongButton>
        </TitleContainer>

        <QRListContainer>
          <ListItem>
            <ItemContainer>
              <div>image:</div>
              <div>id:{id}</div>
              <div>title: </div>
              <div>memo: sd</div>
            </ItemContainer>
            <ButtonContainer>
              <ShortButton onClick={editClick}>수정</ShortButton>
              <ShortButton onClick={deleteClick}>삭제</ShortButton>
            </ButtonContainer>
          </ListItem>
        </QRListContainer>
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
  padding: 10px;
`;

export const UserInfoContainer = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;

export const QRListContainer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 10px;
`;

export const ListItem = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(255, 148, 60, 0.4);
  margin: 5px;
  padding: 8px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  margin: 10px;
  font-size: 0.6rem;
`;

export const ButtonContainer = styled.div`
  width: 30%;
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
