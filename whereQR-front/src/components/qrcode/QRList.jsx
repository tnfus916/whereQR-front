import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { QDiv, Div, A, Title, TD2 } from "./QRStyle";

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

function QRList() {
  const navigate = useNavigate();

  // response
  const [qrs, setQrs] = useState(null);
  //  loading state check
  const [loading, setLoading] = useState(false);
  //error check
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQrs = async () => {
      try {
        setQrs(null);
        setError(null);
        setLoading(true);
        const token = localStorage.getItem("token");
        console.log(token);
        axiosInstance.defaults.headers["Authorization"] = "Token " + token;
        const response = await axiosInstance.get("/qrlist");

        setQrs(response.data);
        console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchQrs();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!qrs) return null;

  const Detail = (data) => {
    if (data != "no") {
      console.log(data);
      navigate(`/qrscan/${data}`);
    }
  };
  return (
    <>
      <QDiv>
        <Div>
          <Title> QR LIST</Title>
          {qrs.map((qr) => (
            <div key={qr}>
              {/* <P>{qr.count}번째 qr코드</P> */}
              <TD2>
                <A
                  key={qr.id}
                  onClick={() => {
                    Detail(qr.key);
                  }}
                >
                  {qr.title}{" "}
                </A>
              </TD2>
            </div>
          ))}
        </Div>
      </QDiv>
    </>
  );
}

export default QRList;
