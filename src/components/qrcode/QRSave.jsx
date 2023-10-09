import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import { QRReaderContainer, QRReaderTitle } from "./QRStyle";

const QRSave = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [isScan, setIsScan] = useState(false);

  const getData = (url) => {
    if (url !== "") {
      console.log(url);
      const id = url.split("/")[4];
      navigate(`/qrs/${id}`);
    }
  };

  const handleScan = (result) => {
    if (result && isScan === false) {
      console.log("qr scanned");
      console.log(result);
      setUrl(result?.text);
      setIsScan(true);
    }
  };

  useEffect(() => {
    console.log("render");
    getData(url);
  }, [url]);

  return (
    <QRReaderContainer>
      <QRReaderTitle>등록할 QR코드를 인식 시켜주세요</QRReaderTitle>
      <QrReader
        onResult={(result) => {
          handleScan(result);
        }}
        containerStyle={{
          width: "80%",
          // height: "80%",
        }}
        videoContainerStyle={{
          width: "100%",
          // height: "100%",
        }}
        videoStyle={{
          width: "100%",
          // height: "100%",
          border: "7px solid orange",
        }}
      />
    </QRReaderContainer>
    // <QDiv className="saveQR">
    //   <Div2>
    //     <Label className="title">title</Label>
    //     <Input
    //       className="title"
    //       name="qr-title"
    //       value={title}
    //       required
    //       onChange={onChangeTitle}
    //     />
    //     <br />
    //     <Label className="memo">memo</Label>
    //     <Input
    //       className="memo"
    //       name="qr-memo"
    //       value={memo}
    //       required
    //       onChange={onChangeMemo}
    //     />
    //     <br />
    //     <Button className="button" type="primary" onClick={onSubmit}>
    //       등록하기
    //     </Button>

    //     <p>주소와 전화번호는 회원가입시 등록했던 정보로 표시됩니다.</p>
    //   </Div2>
    // </QDiv>
  );
};

export default QRSave;
