import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import styled from "styled-components";

function QRScan() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [isScan, setIsScan] = useState(false);

  const getData = (data) => {
    if (data !== "") {
      console.log(data);
      navigate(`/qrscan/${data}`);
    }
  };

  useEffect(() => {
    console.log("scan data change");
    getData(data);
  }, [data]);

  return (
    <>
      <QRReaderContainer>
        <QRReaderTitle>QR코드를 인식해주세요</QRReaderTitle>
        <QrReader
          onResult={(result, error) => {
            if (result && isScan === false) {
              console.log(result);
              setIsScan(true);
              setData(result?.text);
            }

            if (error) {
              console.info(error);
            }
          }}
          containerStyle={{
            width: "700px",
            height: "700px",
          }}
          videoContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          videoStyle={{
            width: "100%",
            height: "100%",
            border: "15px solid orange",
          }}
          scanDelay={300}
        />
      </QRReaderContainer>
    </>
  );
}

export default QRScan;

export const QRReaderContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QRReaderTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: orange;
`;
