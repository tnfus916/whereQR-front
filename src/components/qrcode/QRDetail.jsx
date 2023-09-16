import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  // Button,
  TH,
  TD,
  // Image,
  QRPageContainer,
  QRForm,
  QRFormContainer,
} from "./QRStyle";

function QRDetail() {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  const [title, setTitle] = useState("No result");
  const [memo, setMemo] = useState("No result");
  // const [address, setAddress] = useState("No result");
  const [phonenum, setPhonenum] = useState("No result");
  // const [image, setImage] = useState("No result");
  // const [IsUser, setIsUser] = useState(false);

  const scanQR = () => {
    navigate(`/qrscan`);
  };

  // const saveQR = (key) => {
  //   navigate(`/qrsave/${key}`);
  // };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/qrcode/qrcode-list/", {
        params: { key: id },
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
  }, []);

  // const Modify = () => {
  //   navigate(`/qredit/${id}`);
  // };

  return (
    <>
      <QRPageContainer>
        <QRFormContainer>
          {/* <Image src={image} /> */}
          <QRForm>
            <tr>
              <TH>제목</TH>
              <TD>{title}</TD>
            </tr>
            <tr>
              <TH>메모</TH>
              <TD>{memo}</TD>
            </tr>
            {/* <tr>
              <TH>주소</TH>
              <TD>{address}</TD>
            </tr> */}
            <tr>
              <TH>연락처</TH>
              <TD>{phonenum}</TD>
            </tr>
          </QRForm>
          {/* {IsUser && (
            <div>
              <Button className="button" type="primary" onClick={Modify}>
                수정하기
              </Button>
            </div>
          )} */}
        </QRFormContainer>
      </QRPageContainer>
    </>
  );
}

export default QRDetail;
