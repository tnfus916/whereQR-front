import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Label,
  Input,
  Button,
  QRPageContainer,
  QRFormContainer,
  QRForm,
} from "./QRStyle";
import axiosInstance from "../../api/api";
import axios from "axios";

function QRRegister() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const id = currentUrl.split("/")[4];
  console.log(id);

  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  //   const onChangePhone = (e) => {
  //     setPhonenum(e.target.value);
  //   };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      memo: memo,
      title: title,
    };

    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axiosInstance
      .post("/qrcode/register", data, {
        params: { id: id },
      })
      .then((res) => {
        console.log(res);
        navigate(`/mypage`);
      });

    // if (localStorage.getItem("token")) {
    //   //로그인을 안 했다면, 로그인이 필요한 페이지라고 경고.
    //   let token = localStorage.getItem("token");
    //   axiosInstance.defaults.headers["Authorization"] = "Token " + token;
    //   axiosInstance.post("modifyQR/", data).then(() => {
    //     navigate(`/UserQr`);
    //   });
    // } else {
    //   alert("login필요");
    // }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/qrcode/scan", { params: { id: id } })
      .then((res) => {
        console.log(res);
        // setTitle(res.data["title"]);
        // setMemo(res.data["memo"]);
      });
  }, []);

  return (
    <>
      <QRPageContainer className="modifyQR">
        <Title>QR 코드를 등록해주세요!</Title>
        <QRFormContainer>
          <QRForm>
            <Label className="title">제목</Label>
            <Input
              className="title"
              name="qr-title"
              value={title}
              required
              onChange={onChangeTitle}
            />
            <br />
            <Label className="memo">메모</Label>
            <Input
              className="memo"
              name="qr-memo"
              value={memo}
              required
              onChange={onChangeMemo}
            />
            <br />
            <Button className="button" type="primary" onClick={onSubmit}>
              등록하기
            </Button>
          </QRForm>
        </QRFormContainer>
      </QRPageContainer>
    </>
  );
}

export default QRRegister;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 10px;
  color: orange;
`;
