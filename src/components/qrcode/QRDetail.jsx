import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  QRPageContainer,
  DataListContainer,
  DataContainer,
  Label,
  Data,
  Title,
} from "./QRStyle";
import axios from "axios";
import { useAppContext } from "../../AppContext";

function QRDetail() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const id = currentUrl.split("/")[4];
  console.log(id);
  const { setCid, setCqr } = useAppContext();
  setCid(id);

  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [qrStatus, setQrStatus] = useState("New");

  const registerQR = () => {
    navigate(`/qrsave/${id}`);
  };

  const token = localStorage.getItem("token");

  // axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
  useEffect(() => {
    const getDetail = async () => {
      await axios
        .get("http://27.96.130.127:8080/qrcode/scan", {
          params: { id: id },
        })
        .then((res) => {
          // console.log("res", res);
          setTitle(res.data["title"]);
          setMemo(res.data["memo"]);
          setPhonenum(res.data["phonenumber"]);
          setQrStatus(res.data["qrStatus"]);
          if (qrStatus === "New") {
            if (token) {
              registerQR();
            } else {
              navigate(`/login`);
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
          {qrStatus === "Saved" ? (
            <>
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
            </>
          ) : token ? (
            <>
              <Title>
                등록되지 않은 qr코드입니다. 등록 페이지로 이동합니다.
              </Title>
            </>
          ) : (
            <>
              <DataContainer>
                <Title>등록되지 않은 qr코드입니다. </Title>
                <Title>로그인 후 등록 가능합니다.</Title>
              </DataContainer>
            </>
          )}
        </DataListContainer>
      </QRPageContainer>
    </>
  );
}

export default QRDetail;
