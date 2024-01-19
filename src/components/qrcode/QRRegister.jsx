import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Label,
  Input,
  Button,
  QRPageContainer,
  QRFormContainer,
  QRForm,
  QRTitle,
} from './QRStyle';
import axiosInstance from '../../api/api';

function QRRegister() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const id = currentUrl.split('/')[4];

  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');

  useEffect(() => {
    const isRegistered = async () => {
      await axiosInstance
        .get('/qrcode/scan', {
          params: { id: id },
        })
        .then((res) => {
          console.log('res', res);
          if (res.data.status === 'FAILED') {
            console.log(res.data.data);
            window.alert(res.data.data.message);
            navigate('/mypage');
          } else {
            if (res.data.data['qrStatus'] !== 'New') {
              alert('등록된 qr코드입니다.');
            }
            navigate('/mypage'); //추후 qrlist로 이동 예정
          }
        });
    };
    isRegistered();
  }, []);

  const onChangeTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };

  const onSubmit = (e) => {
    console.log('버튼 클릭');
    e.preventDefault();

    const data = {
      memo: memo,
      title: title,
    };

    axiosInstance.defaults.headers[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('accessToken')}`;

    axiosInstance
      .post('/qrcode/register', data, {
        params: { id: id },
      })
      .then((res) => {
        console.log('res', res);
        if (res.data.status === 'SUCCESS') {
          console.log(res.data.data);
          alert('QR 코드 등록 성공!');
          navigate(`/mypage`);
        } else {
          alert(res.data.data.message);
          navigate(`/mypage`);
        }
      });
  };

  return (
    <>
      <QRPageContainer className="modifyQR">
        <QRTitle>QR 코드에 정보를 입력해주세요!</QRTitle>
        <QRFormContainer>
          <QRForm>
            <Label className="title">제목</Label>
            <Input
              className="title"
              name="qr-title"
              value={title}
              required
              onChange={onChangeTitle}
            />
            <br />
            <Label className="memo">메모</Label>
            <Input
              className="memo"
              name="qr-memo"
              value={memo}
              required
              onChange={onChangeMemo}
            />
            <br />
            <Button className="button" type="primary" onClick={onSubmit}>
              등록하기
            </Button>
          </QRForm>
        </QRFormContainer>
      </QRPageContainer>
    </>
  );
}

export default QRRegister;
