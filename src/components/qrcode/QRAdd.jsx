import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import { QRReaderContainer, QRReaderTitle } from "./QRStyle";

function QRAdd() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [isScan, setIsScan] = useState(false);

  //   get from qrlist whose id is scanned qr's id
  //   if 존재 and status==new then,
  // move to other qr save page and change status

  const getData = (id) => {
    if (id == "scanned id") {
      console.log(id);
      navigate(`/qrsave/${id}`);
    }
  };

  const handleScan = (result) => {
    if (result && isScan === false) {
      console.log("qr scanned");
      setId(result?.text);
      setIsScan(true);
    }
  };

  useEffect(() => {
    console.log("render");
    getData(id);
  }, [id]);

  return (
    <>
      <QRReaderContainer>
        <QRReaderTitle>등록할 QR코드를 인식 시켜주세요</QRReaderTitle>
        <QrReader
          onResult={(result) => {
            handleScan(result);
          }}
          containerStyle={{
            width: "80%",
            height: "80%",
          }}
          videoContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          videoStyle={{
            width: "100%",
            height: "100%",
            border: "7px solid orange",
          }}
        />
      </QRReaderContainer>
    </>
  );
}

export default QRAdd;
