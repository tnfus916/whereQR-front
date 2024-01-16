import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import { QRReaderContainer, QRReaderTitle } from "./QRStyle";

const QRSave = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [isScan, setIsScan] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [isRatio, setIsRatio] = useState(false);

  const getData = (url) => {
    if (url !== "") {
      console.log(url);
      const id = url.split("/")[4];
      navigate(`/qrsave/${id}`);
    }
  };

  const handleScan = (result) => {
    if (result && isScan === false) {
      console.log("qr scanned");
      console.log(result?.text);
      setUrl(result?.text);
      setIsScan(true);
    }
  };

  useEffect(() => {
    console.log("render");
    getData(url);
  }, [url]);

  useEffect(() => {
    getCameraAspectRatio();
  }, [ratio]);

  const getCameraAspectRatio = async () => {
    try {
      const mediaDevices = navigator.mediaDevices;
      const stream = await mediaDevices.getUserMedia({ video: true });
      const track = stream.getVideoTracks()[0];
      const settings = track.getSettings();
      const width = settings.width;
      const height = settings.height;
      const aspectRatio = settings.aspectRatio;
      setWidth(width);
      setHeight(height);
      setRatio(aspectRatio);
      setIsRatio(true);

      console.log('카메라 비율:', height, width, ratio);
    } catch (error) {
      console.error('카메라 접근에 실패했습니다:', error);
    }
  };

  return (
    <QRReaderContainer>
      <QRReaderTitle>등록할 QR 코드를 인식 시켜주세요!</QRReaderTitle>
      {!isRatio ? (
        <QrReader
          onResult={(result) => {
            handleScan(result);
          }}
          containerStyle={{
            width: '100%',
          }}
          videoContainerStyle={{
            width: '100%',
          }}
          videoStyle={{
            width: '100%',
            height: `${(height / width) * 100 + 1.2}%`,
          }}
        />
      ) : (
        <QrReader
          onResult={(result) => {
            handleScan(result);
          }}
          containerStyle={{
            width: '100%',
          }}
          videoContainerStyle={{
            width: '100%',
          }}
          videoStyle={{
            width: '100%',
            height: `${(height / width) * 100 + 1.2}%`,
            border: '7px solid rgb(36, 114, 250)',
          }}
        />
      )}
    </QRReaderContainer>
  );
};

export default QRSave;
