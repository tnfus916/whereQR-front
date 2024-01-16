import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  QRPageContainer,
  DataListContainer,
  DataContainer,
  Label,
  Data,
} from './QRStyle';
import axiosInstance from '../../api/api';

function QRDetail() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const id = currentUrl.split('/')[4];
  console.log(id);

  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [qrStatus, setQrStatus] = useState('');

  // axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
  useEffect(() => {
    const getDetail = async () => {
      await axiosInstance
        .get('/qrcode/scan', {
          params: { id: id },
        })
        .then((res) => {
          console.log('res', res);
          if (res.data.status === 'FAILED') {
            console.log(res.data.data);
            window.alert(res.data.data.message);
            navigate('/');
          } else {
            if (res.data.data['qrStatus'] === 'New') {
              alert('등록되지 않은 qr코드입니다.');
              navigate('/');
            } else if (res.data.data['qrStatus'] === 'Saved') {
              setTitle(res.data.data['title']);
              setMemo(res.data.data['memo']);
              setPhonenum(res.data.data['phonenumber']);
              setQrStatus(res.data.data['qrStatus']);
            } else {
              alert('유효하지 않은 qr코드입니다.');
              navigate('/');
            }
          }
        });
    };
    getDetail();
  }, []);

  return (
    <>
      <QRPageContainer>
        <DataListContainer>
          {qrStatus === 'Saved' ? (
            <>
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
            </>
          ) : (
            <></>
          )}
        </DataListContainer>
      </QRPageContainer>
    </>
  );
}

export default QRDetail;
