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
import axiosInstance from "../../api/api";

function QRRegister() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const id = currentUrl.split("/")[4];
  console.log(id);

  const [title, setTitle] = useState("No Title");
  const [memo, setMemo] = useState("No result");
  const [phonenum, setPhonenum] = useState("No result");

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
      id: id,
      title: title,
      memo: memo,
      createDate: "2021-09-01",
      updateDate: "2021-09-01",
      phoneNumber: phonenum,
      address: "서울시 강남구",
    };

    axiosInstance
      .post("/qrcode/register", null, {
        params: data,
      })
      .then(() => {
        console.log(data);
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
    axiosInstance.get("/qrcode/scan", { params: { id: id } }).then((res) => {
      console.log(res);

      setTitle(res.data["title"]);
      setMemo(res.data["memo"]);
      setPhonenum(res.data["phoneNumber"]);
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
            {/* <Label className="phonenum">연락처</Label>
            <Input
              className="phonenum"
              name="qr-phonenum"
              value={phonenum}
              required
              onChange={onChangePhone}
            />
            <br /> */}
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
