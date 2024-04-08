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
} from '../../components/qrcode/QRStyle';
import axiosInstance from '../../services/api';

function QRRegister() {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const id = currentUrl.split('/')[4];

  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');

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
      id: id,
      memo: memo,
      title: title,
    };

    axiosInstance.post('/qrcode/register/', data).then((res) => {
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
              value={ title }
              required
              onChange={ onChangeTitle }
            />
            <br />
            <Label className="memo">메모</Label>
            <Input
              className="memo"
              name="qr-memo"
              value={ memo }
              required
              onChange={ onChangeMemo }
            />
            <br />
            <Button className="button" type="primary" onClick={ onSubmit }>
              등록하기
            </Button>
          </QRForm>
        </QRFormContainer>
      </QRPageContainer>
    </>
  );
}

export default QRRegister;