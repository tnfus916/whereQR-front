import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  QDiv,
  Button,
  Table,
  Div3,
  TH,
  TD,
  Image,
  QRPageContainer,
  QRForm,
  QRFormContainer,
} from "./QRStyle";

function QRDetail() {
  let navigate = useNavigate();
  let key = useParams().ID;
  console.log(key);

  const [address, setAdd] = useState("No result");
  const [memo, setMemo] = useState("No result");
  const [phonenum, setPhonenum] = useState("No result");
  const [title, setTitle] = useState("No result");
  const [image, setImage] = useState("No result");
  const [IsUser, setIsUser] = useState(false);

  const saveQR = (key) => {
    navigate(`/qrsave/${key}`);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/qrcode/data/", { params: { key: key } })
      .then((response) => {
        console.log("response", response);

        if (Number(response.data["is_null"]) === 0) {
          setTitle(response.data["title"]);
          setAdd(response.data["address"]);
          setMemo(response.data["memo"]);
          setPhonenum(response.data["phonenumber"]);
          setImage(response.data["image"]);
          if ((response.data["user"] = localStorage.getItem("user"))) {
            setIsUser(true);
          }
        } else {
          console.log("등록된 정보가 없습니다.");
          saveQR(key);
        }
      });
  }, []);

  const Modify = () => {
    navigate(`/qredit/${key}`);
  };

  return (
    <>
      <QRPageContainer>
        <QRFormContainer>
          <Image src={image} />
          <QRForm>
            <tr>
              <TH>제목</TH>
              <TD>{title}</TD>
            </tr>
            <tr>
              <TH>메모</TH>
              <TD>{memo}</TD>
            </tr>
            <tr>
              <TH>주소</TH>
              <TD>{address}</TD>
            </tr>
            <tr>
              <TH>연락처</TH>
              <TD>{phonenum}</TD>
            </tr>
          </QRForm>
          {IsUser && (
            <div>
              <Button className="button" type="primary" onClick={Modify}>
                수정하기
              </Button>
            </div>
          )}
        </QRFormContainer>
      </QRPageContainer>
    </>
  );
}

export default QRDetail;
