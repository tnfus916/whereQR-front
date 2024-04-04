import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Label,
  Input,
  Button,
  QRPageContainer,
  QRFormContainer,
  QRForm,
} from '../../components/qrcode/QRStyle';
import axiosInstance from '../../services/api';

function QREdit() {
  const navigate = useNavigate();
  const url = window.location.href;
  const id = url.split('/')[4];

  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  // const [phonenum, setPhonenum] = useState("");

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  // const onChangePhone = (e) => {
  //   setPhonenum(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: id,
      title: title,
      memo: memo,
      phoneNumber: '01062548926',
    };

    axiosInstance
      .post('/qrcode/update/', data)
      .then((res) => {
        console.log(res);
        navigate(`/qrlist`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosInstance
      .get('/qrcode/scan/', {
        params: { id: id },
      })
      .then((res) => {
        console.log(res);
        setTitle(res.data.data['title']);
        setMemo(res.data.data['memo']);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <QRPageContainer className="modifyQR">
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
            {/* <Label className="phonenum">연락처</Label>
            <Input
              className="phonenum"
              name="qr-phonenum"
              value={phonenum}
              required
              onChange={onChangePhone}
            />
            <br /> */}
            <Button className="button" type="primary" onClick={onSubmit}>
              수정하기
            </Button>
          </QRForm>
        </QRFormContainer>
      </QRPageContainer>
    </>
  );
}

export default QREdit;
