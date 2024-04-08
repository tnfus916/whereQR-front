import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/axios';

import QRListItem from '../../components/qrcode/QRListItem';
import {
  QRListContainer,
  QRListItemContainer,
  QRPageContainer,
  QRTitle,
} from '../../components/qrcode/QRStyle';

function QRList() {
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState('No result');
  // const [age, setAge] = useState("No result");
  const [phonenum, setPhonenum] = useState('No result');

  const [qrcode, setQrcode] = useState([]);
  // const [qrcodeId, setQrcodeId] = useState("");
  // const [qrcodeTitle, setQrcodeTitle] = useState([]);
  // const [qrcodeMemo, setQrcodeMemo] = useState([]);
  // const [qrcodeImage, setQrcodeImage] = useState("");

  useEffect(() => {
    const fetchQrList = async () => {
      const res = await axiosInstance.get('/qrcode/my');

      if (res.data.status === 'SUCCESS') {
        console.log(res.data);
        setQrcode([
          ...res.data.data.map((item) => ({
            id: item['id'],
            title: item['title'],
            memo: item['memo'],
            url: item['url'],
          })),
        ]);
      }
    };
    fetchQrList();
  }, []);

  console.log(qrcode);

  return (
    <>
      <QRPageContainer>
        <QRTitle>QR코드 목록</QRTitle>
        { qrcode ? (
          <QRListContainer>
            { qrcode.map((data) => (
              // <QRListItemContainer
              //   key={data.id}
              //   onClick={() => navigate(`/qrscan/${data.id}`)}
              // >
              <QRListItem key={ data.id } data={ data } />
              // </QRListItemContainer>
            )) }
          </QRListContainer>
        ) : (
          <></>
        ) }
      </QRPageContainer>
    </>
  );
}

export default QRList;