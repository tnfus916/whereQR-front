import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  QRPageContainer,
  DataListContainer,
  DataContainer,
  Label,
  Data,
} from "./QRStyle";
import axios from "axios";

function QRDetail() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const id = currentUrl.split("/")[4];
  console.log(id);

  const [title, setTitle] = useState("No result");
  const [memo, setMemo] = useState("No result");
  const [phonenum, setPhonenum] = useState("No result");

  const scanQR = () => {
    navigate(`/qrscan`);
  };

  // axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
  useEffect(() => {
    const getDetail = async () => {
      await axios
        .get("http://localhost:8080/qrcode/scan", {
          params: { id: id },
        })
        .then((res) => {
          console.log("res", res);
          // user=> memberId
          if (res.data["qrStatus"] === "New") {
            window.alert("등록된 정보가 없습니다. ");
            //두번 실행됨->  main.jsx react strict mode 제거
          } else {
            if (res.data["user"] === localStorage.getItem("user")) {
              window.alert(
                "본인이 소지한 qr코드로는 분실 신고를 할 수 없습니다~!"
              );
              scanQR();
            } else {
              setTitle(res.data["title"]);
              setMemo(res.data["memo"]);
              setPhonenum(res.data["phonenumber"]);
              // window.alert("해당 연락처로 연락해주세요!");
            }
          }
        })
        .catch((err) => {
          console.log(err);
          window.alert("유효하지 않은 qr코드입니다.");
        });
    };
    getDetail();
  }, []);

  return (
    <>
      <QRPageContainer>
        <DataListContainer>
          <DataContainer>
            <Label>제목</Label>
            <Data>{title}</Data>
          </DataContainer>
          <DataContainer>
            <Label>메모</Label>
            <Data>{memo}</Data>
          </DataContainer>
          <DataContainer>
            <Label>연락처</Label>
            <Data>{phonenum}</Data>
          </DataContainer>
        </DataListContainer>
      </QRPageContainer>
    </>
  );
}

export default QRDetail;
