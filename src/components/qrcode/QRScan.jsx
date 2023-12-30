// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { QrReader } from 'react-qr-reader';
// import { QRReaderContainer, QRReaderTitle } from './QRStyle';
// import QrScanner from 'react-qr-reader';

function QRScan() {
  // const navigate = useNavigate();
  // const [url, setUrl] = useState("");
  // const [isScan, setIsScan] = useState(false);
  // const getData = (url) => {
  //   if (url !== "") {
  //     console.log(url);
  //     const id = url.split("/")[4];
  //     navigate(`/qrscan/${id}`);
  //   }
  // };
  // const handleScan = (result) => {
  //   if (result && isScan === false) {
  //     console.log("qr scanned");
  //     setUrl(result?.text);
  //     setIsScan(true);
  //   }
  // };
  // useEffect(() => {
  //   console.log("render");
  //   getData(url);
  // }, [url]);
  // return (
  //   <>
  //     <QRReaderContainer>
  //       <QRReaderTitle>QR코드를 인식 시켜주세요</QRReaderTitle>
  //       <QrReader
  //         onResult={(result) => {
  //           handleScan(result);
  //         }}
  //         containerStyle={{
  //           width: "80%",
  //           // height: "80%",
  //         }}
  //         videoContainerStyle={{
  //           width: "100%",
  //           // height: "100%",
  //         }}
  //         videoStyle={{
  //           width: "100%",
  //           // height: "100%",
  //           border: "7px solid orange",
  //         }}
  //       />
  //     </QRReaderContainer>
  //   </>
  // );
  // const [result, setResult] = useState('');
  // const handleScan = (data) => {
  //   if (data) {
  //     setResult(data);
  //   }
  // };
  // const handleError = (error) => {
  //   console.error('Error while scanning QR code:', error);
  // };
  // return (
  //   <div>
  //     <QrScanner
  //       onScan={handleScan}
  //       onError={handleError}
  //       style={{ width: '100%' }}
  //     />
  //     {result && <p>QR Code Result: {result}</p>}
  //   </div>
  // );
}

export default QRScan;
