import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";

function QRScan() {
  let navigate = useNavigate();
  const [data, setData] = useState("No result");

  const getData = (data) => {
    if (data != "No result") {
      console.log(data);
      navigate(`/qrscan/${data}`);
    }
  };

  useEffect(() => {
    console.log("값이 바뀜");
    getData(data);
  }, [data]);

  return (
    <QrReader
      onResult={(result, error) => {
        if (!result) {
          setData(result?.text);
        }

        if (!error) {
          console.info(error);
        }
      }}
      style={{ width: "100%" }}
    />
  );
}

export default QRScan;
