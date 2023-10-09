import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Label,
  Input,
  Button,
  QRPageContainer,
  QRFormContainer,
  QRForm,
} from "./QRStyle";
import axios from "axios";
import axiosInstance from "../../api/api";

function QREdit() {
  const navigate = useNavigate();
  const id = useParams();

  const [title, setTitle] = useState("No Title");
  const [memo, setMemo] = useState("No result");
  const [phonenum, setPhonenum] = useState("No result");

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhonenum(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: id["ID"],
      title: title,
      memo: memo,
      phonenum: phonenum,
    };

    axios
      .post("http://localhost:8080/qrcode/update", { params: data })
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
    axiosInstance
      .get("/qrcode/scan/", { params: { id: id["ID"] } })
      .then((res) => {
        console.log(res);

        setTitle(res.data["title"]);
        setMemo(res.data["memo"]);
        setPhonenum(res.data["phonenumber"]);
      });
  }, []);

  return (
    <>
      <QRPageContainer className="modifyQR">
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
            <Label className="phonenum">연락처</Label>
            <Input
              className="phonenum"
              name="qr-phonenum"
              value={phonenum}
              required
              onChange={onChangePhone}
            />
            <br />
            <Button className="button" type="primary" onClick={onSubmit}>
              수정하기
            </Button>
          </QRForm>
        </QRFormContainer>
      </QRPageContainer>
    </>
  );
}

export default QREdit;
