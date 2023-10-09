import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

function Mypage() {
  // const user = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [email, setEmail] = useState("");
  const [qrcodeId, setQrcodeId] = useState("");
  const [qrcodeTitle, setQrcodeTitle] = useState("");
  const [qrcodeMemo, setQrcodeMemo] = useState("");
  const [qrcodeImage, setQrcodeImage] = useState("");


  const addClick = () => {
    navigate("/qrsave");
  };

  const editClick = () => {
    navigate("/qredit/:id");
  };

  useEffect(() => {
    axiosInstance
      .get("/memeber/detail/", { params: { user: user } })
      .then((res) => {
        console.log(res.data);
        setUsername(res.data["username"]);
        setAge(res.data["age"]);
        setPhonenum(res.data["phoneNumber"]);
        if (res.data["qrcodes"] === null) {
          setIsRegistered(false);
        } else {
          setIsRegistered(true);
          setQrcode(res.data["qrcodes"]);
        }
      });
  }, []);

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
        {isRegistered ? (
          <QRListContainer>
            <TitleContainer>
              <Title>QR code 목록</Title>
            </TitleContainer>
            <ListItem>
              <ItemContainer>
                <div>image:</div>
                <div>id:{id}</div>
                <div>title: </div>
                <div>memo: sd</div>
              </ItemContainer>
              <ButtonContainer>
                <ShortButton onClick={editClick}>수정</ShortButton>
                {/* <ShortButton onClick={deleteClick}>삭제</ShortButton> */}
              </ButtonContainer>
            </ListItem>
          </QRListContainer>
        ) : (
          <QRListContainer>
            <TitleContainer>
              <Title>QR code 목록</Title>
            </TitleContainer>
            <ListItem>
              <div>등록된 QR code가 존재 하지 않습니다.</div>
              <LongButton onClick={addClick}>QR code 등록</LongButton>
            </ListItem>
          </QRListContainer>
        )}
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
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
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
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(255, 148, 60, 0.4);
  margin: 5px;
  padding: 20px;
  font-size: 0.7rem;
`;

export const ItemContainer = styled.div`
  width: 100%;
  margin: 10px;
  font-size: 0.8rem;
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
