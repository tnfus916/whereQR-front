import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  QRPageContainer,
  DataListContainer,
  DataContainer,
  Label,
  Data,
  Button,
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
  const [qrMemberId, setQrMemberId] = useState('');

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
              setQrMemberId(res.data.data['memberId']);
            } else {
              alert('유효하지 않은 qr코드입니다.');
              navigate('/');
            }
          }
        });
    };
    getDetail();
  }, []);

  const handleChatting = () => {
    axiosInstance.defaults.headers[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('accessToken')}`;

    axiosInstance.get('/member/me').then((res) => {
      console.log(res);
      if (res.data.status === 'SUCCESS') {
        // 채팅방 id값 받아오기

        const data = {
          starter: res.data.data, // 내 id
          participant: qrMemberId, // qr코드 주인 id
        };

        console.log(data);

        axiosInstance.defaults.headers[
          'Authorization'
        ] = `Bearer ${localStorage.getItem('accessToken')}`;

        axiosInstance.post('/chat/create/room/', data).then((res) => {
          console.log(res);
          if (res.data.status === 'SUCCESS') {
            console.log(res);
            navigate(`/chatroom/${res.data.data}`);
          } else {
            alert(res.data.data.message);
          }
        });
      }
    });
  };

  return (
    <>
      <QRPageContainer>
        {qrStatus === 'Saved' ? (
          <>
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
              <Button onClick={handleChatting}>채팅하기</Button>
            </DataListContainer>
          </>
        ) : (
          <></>
        )}
      </QRPageContainer>
    </>
  );
}

export default QRDetail;
