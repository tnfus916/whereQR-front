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

  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [qrcode, setQrcode] = useState({});

  // const scanQR = () => {
  //   navigate(`/qrscan`);
  // };

  const registerQR = () => {
    navigate(`/qrsave/${id}`);
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
            if (
              window.confirm(
                "등록된 정보가 없습니다. qrcode를 등록하시겠습니까? "
              )
            ) {
              if (localStorage.getItem("token")) {
                registerQR();
              } else {
                if (
                  window.confirm(
                    "로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                  )
                ) {
                  navigate(`/login/${id}`);
                }
              }
              //두번 실행됨->  main.jsx react strict mode 제거
            }
          } else if (res.data["qrStatus"] === "Saved") {
            //   axiosInstance.defaults.headers[
            //     "Authorization"
            //   ] = `Bearer ${localStorage.getItem("token")}`;
            //   axiosInstance.get("/member/detail").then((res) => {
            //     if (res.data["qrcodes"].length !== 0) {
            //       setQrcode(res.data["qrcodes"]);
            //       console.log(res.data["qrcodes"]);
            //     }
            //   });
            // if (res.data["user"] === localStorage.getItem("user")) {
            //   window.alert(
            //     "본인이 소지한 qr코드로는 분실 신고를 할 수 없습니다~!"
            //   );
            // } else {
            //   setTitle(res.data["title"]);
            //   setMemo(res.data["memo"]);
            //   setPhonenum(res.data["phonenumber"]);
            //   // window.alert("해당 연락처로 연락해주세요!");
            // }
            setTitle(res.data["title"]);
            setMemo(res.data["memo"]);
            setPhonenum(res.data["phonenumber"]);
            console.log("scan saved qr");
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
