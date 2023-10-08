import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import {
  // Button,
  QRPageContainer,
  DataListContainer,
  DataContainer,
  Label,
  Data,
} from "./QRStyle";

function QRDetail() {
  const navigate = useNavigate();
  const id = useParams();

  const [title, setTitle] = useState("No result");
  const [memo, setMemo] = useState("No result");
  const [phonenum, setPhonenum] = useState("No result");

  const scanQR = () => {
    navigate(`/qrscan`);
  };

  useEffect(() => {
    console.log(id["ID"]);
    const getDetail = async () => {
      await axios
        .get("http://localhost:8080/qrcode/scan", {
          params: { id: id["ID"] },
        })
        .then((res) => {
          console.log("res", res);
          if (res.data["qrStatus"] === "New") {
            if (window.confirm("등록된 정보가 없습니다. 등록하시겠습니까?")) {
              //왜 두번뜰까
              scanQR();
            } else {
              // saveQR(id);
              console.log("저장페이지로 이동");
            }
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
              window.alert("해당 연락처로 연락해주세요!");
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
