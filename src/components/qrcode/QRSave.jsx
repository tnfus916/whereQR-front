import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { QDiv, Label, Div2, Input, Button } from "./QRStyle";

const BaseURL = "http://127.0.0.1:8080/qrcode/";

const axiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 5000,
  headers: {
    Authorization: "Token",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const QRSave = () => {
  let navigate = useNavigate();
  let key = useParams().ID;
  console.log(key);

  const [title, setTitle] = useState("No Title");
  const [memo, setMemo] = useState("No result");

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      key: key,
      title: title,
      text: memo,
    };
    if (localStorage.getItem("token")) {
      //로그인을 안 했다면, 로그인이 필요한 페이지라고 경고.
      let token = localStorage.getItem("token");
      axiosInstance.defaults.headers["Authorization"] = "Token " + token;
      axiosInstance.post("saveQR/", data).then(() => {
        navigate(`/UserQr`);
      });
    } else {
      alert("login필요");
    }
  };

  return (
    <QDiv className="saveQR">
      <Div2>
        <Label className="title">title</Label>
        <Input
          className="title"
          name="qr-title"
          value={title}
          required
          onChange={onChangeTitle}
        />
        <br />
        <Label className="memo">memo</Label>
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

        <p>주소와 전화번호는 회원가입시 등록했던 정보로 표시됩니다.</p>
      </Div2>
    </QDiv>
  );
};

export default QRSave;
