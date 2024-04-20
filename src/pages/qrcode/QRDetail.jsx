import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  QRPageContainer,
  DataListContainer,
  DataContainer,
  Label,
  Data,
  Button,
} from '../../components/qrcode/QRStyle';
import axiosInstance from '../../services/axios';

function QRDetail() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const id = currentUrl.split('/')[4];

  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [qrStatus, setQrStatus] = useState('');
  const [qrMemberId, setQrMemberId] = useState('');

  useEffect(() => {
    const returnResult = async () => {
      await axiosInstance
        .get('/qrcode/scan', {
          params: { id: id },
        })
        .then((res) => {
          // qr코드가 유효하지 않은 경우
          if (res.data.status === 'FAILED') {
            window.alert(res.data.data.message);
            navigate('/');
          } else {
            // qr코드가 등록되지 않은 경우
            if (res.data.data['qrStatus'] === 'New') {
              const accessToken = localStorage.getItem('accessToken');
              if (accessToken) {
                alert(
                  '등록되지 않은 코드입니다. QR 코드 등록 페이지로 이동합니다.'
                );
                navigate(`/qrregister/${id}`);
              } else {
                alert('등록되지 않은 코드입니다. 로그인이 필요합니다.');
                navigate('/login');
                // 로그인 후 등록 페이지로 이동하도록 react-query..?
              }
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
    returnResult();
  }, []);

  const handleChatting = () => {
    axiosInstance.get('/member/me').then((res) => {
      if (res.data.status === 'SUCCESS') {
        // 채팅방 id값 받아오기
        const data = {
          starter: res.data.data, // 내 id
          participant: qrMemberId, // qr코드 주인 id
        };

        axiosInstance.post('/chat/create/room/', data).then((res) => {
          if (res.data.status === 'SUCCESS') {
            navigate(`/chatroom/${res.data.data}`);
          } else {
            // 이미 진행 중인 채팅방이 있다면 해당 채팅방으로 이동
            if (
              res.data.data.message === '이미 진행 중인 채팅방이 존재합니다.'
            ) {
              axiosInstance
                .get('/chat/chatroom/', {
                  params: {
                    starterId: data.starter, // 내 id
                    participantId: qrMemberId, // qr코드 주인 id
                  },
                })
                .then((res) => {
                  navigate(`/chatroom/${res.data.data}`);
                });
            } else {
              alert(res.data.data.message);
            }
          }
        });
      } else {
        alert('로그인이 필요합니다.');
        navigate('/login');
        // 로그인 후 채팅방으로 이동하도록 react-query..?
      }
    });
  };

  return (
    <>
      <QRPageContainer>
        { qrStatus === 'Saved' ? (
          <>
            <DataListContainer>
              <DataContainer>
                <Label>제목</Label>
                <Data>{ title }</Data>
              </DataContainer>
              <DataContainer>
                <Label>메모</Label>
                <Data>{ memo }</Data>
              </DataContainer>
              <DataContainer>
                <Label>연락처</Label>
                <Data>{ phonenum }</Data>
              </DataContainer>
              <Button onClick={ handleChatting }>채팅하기</Button>
            </DataListContainer>
          </>
        ) : (
          <></>
        ) }
      </QRPageContainer>
    </>
  );
}

export default QRDetail;