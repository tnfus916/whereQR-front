import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import {
  // Button,
  // Image,
  QRPageContainer,
} from "./QRStyle";

function QRDetail() {
  const navigate = useNavigate();
  const id = useParams();

  const [title, setTitle] = useState("No result");
  const [memo, setMemo] = useState("No result");
  const [phonenum, setPhonenum] = useState("No result");
  // const [address, setAddress] = useState("No result");
  // const [image, setImage] = useState("No result");
  // const [IsUser, setIsUser] = useState(false);

  const scanQR = () => {
    navigate(`/qrscan`);
  };

  // const saveQR = (key) => {
  //   navigate(`/qrsave/${key}`);
  // };

  useEffect(() => {
    console.log(id["ID"]);
    const getDetail = async () => {
      await axios
        .get("http://localhost:8080/qrcode/scan", {
          params: { id: id },
        })
        .then((response) => {
          console.log("response", response);
          if (Number(response.data["is_null"]) === 0) {
            if (response.data["user"] === localStorage.getItem("user")) {
              // setIsUser(true);
              window.alert(
                "본인이 소지한 qr코드로는 분실 신고를 할 수 없습니다~!"
              );
              scanQR();
            } else {
              setTitle(response.data["title"]);
              setMemo(response.data["memo"]);
              setPhonenum(response.data["phonenumber"]);
              window.alert("해당 연락처로 연락해주세요!");
            }
          } else {
            // console.log("등록된 정보가 없습니다.");
            // //등록하시겠습니끼? yes->qrsave no->qrscan
            // if (window.confirm("등록된 정보가 없습니다. 등록하시겠습니까?")) {
            //   scanQR();
            // } else {
            //   saveQR(id);
            // }
            window.alert("등록된 정보가 없는 qr code입니다.");
          }
        });
      //   axios
      //     .get("http://localhost:8080/qrcode/scan", { params: { id: id } })
      //     .then((res) => {
      //       console.log("res", res);

      //       if (Number(res.data["is_null"]) === 0) {
      //         if (res.data["user"] === localStorage.getItem("user")) {
      //           window.alert("본인 소지품은 분실신고를 할 수 없습니다!");
      //           scanQR();
      //         } else {
      //           setTitle(res.data["title"]);
      //           setMemo(res.data["memo"]);
      //           setPhonenum(res.data["phonenumber"]);
      //           window.alert("해당 연락처로 연락해주세요!");
      //         }
      //       } else {
      //         // console.log("등록된 정보가 없습니다.");
      //         // //등록하시겠습니끼? yes->qrsave no->qrscan
      //         // if (window.confirm("등록된 정보가 없습니다. 등록하시겠습니까?")) {
      //         //   scanQR();
      //         // } else {
      //         //   saveQR(id);
      //         // }
      //         window.alert("등록된 정보가 없는 qr code입니다.");
      //       }
      //     });
      //   // .catch((error) => {
      //   //   console.log(error);
      //   // });
    };

    getDetail();
  }, []);

  // const Modify = () => {
  //   navigate(`/qredit/${id}`);
  // };

  return (
    <>
      <QRPageContainer>
        {/* <Image src={image} /> */}
        {/* <QRForm>
            <TR>
              <TH>제목</TH>
              <TD>{title}</TD>
            </TR>
            <TR>
              <TH>메모</TH>
              <TD>{memo}</TD>
            </TR>
            <TR>
              <TH>연락처</TH>
              <TD>{phonenum}</TD>
            </TR>
          </QRForm>
           */}
        <InfoTable>
          <TR>
            <TH>제목</TH>
            <TD>{title}</TD>
          </TR>
          <TR>
            <TH>메모</TH>
            <TD>{memo}</TD>
          </TR>
          <TR>
            <TH>연락처</TH>
            <TD>{phonenum}</TD>
          </TR>
        </InfoTable>
        {/* {IsUser && (
            <div>
              <Button className="button" type="primary" onClick={Modify}>
                수정하기
              </Button>
            </div>
          )} */}
      </QRPageContainer>
    </>
  );
}

export default QRDetail;

export const InfoTable = styled.table`
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const TH = styled.th`
  /* width: 20%; */
  // color: #15cdfc;
  /* border-radius: 8px;
  font-size: 1rem; */
  /* font-weight: 600; */
  /* padding-left: 0.1rem;
  padding-right: 0.1rem; */
  /* justify-content: space-between;
  z-index: 10; */
  display: flex;
  align-items: center;
  /* flex: 0 0 10rem; */
  /* width: 10rem; */
  color: orange;
  background: #c3c7d926;
  font-weight: 600;
  font-size: small;
  padding: 1rem;
  word-break: keep-all;
`;

export const TD = styled.td`
  border: 1px solid;
  /* margin-top: 1%;
  border-radius: 8px;
  line-height: 1.3rem;
  font-size: 1rem; */
  /* padding-left: 0.5rem;
  padding-right: 0.5rem; */
  /* display: flex; */
  /* justify-content: space-between;
  z-index: 10;
  margin-bottom: 3%;
  text-align: left; */
  display: flex;
  align-items: center;
  padding: 1rem;
  flex: 1;
  word-break: keep-all;
  font-size: 3px;
`;

export const TR = styled.tr`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 2px;
`;
