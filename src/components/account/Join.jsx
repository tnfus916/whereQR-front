import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Label,
  AccountPageContainer,
  Input,
  Button,
  AccountFormContainer,
  ButtonContainer,
  FormItem,
  FormList,
  AccountForm,
} from './AccountStyle';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

function Join() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const kakaoId = queryParams.get('kakaoid');
  const username = queryParams.get('username');
  const [phonenum, setPhonenum] = useState('');
  const [roles, setRoles] = useState(['USER']);

  const onSubmit = (e) => {
    e.preventDefault();

    const user_data = {
      roles: roles,
      kakaoId: kakaoId,
      username: username,
      phoneNumber: phonenum,
    };

    axiosInstance
      .post('member/create', user_data)
      .then((res) => {
        console.log(res.data);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangePhonenum = (e) => {
    setPhonenum(e.target.value);
  };

  return (
    <>
      <AccountPageContainer className="signup">
        <AccountFormContainer>
          <AccountForm>
            <FormList>
              <FormItem>
                <Label className="label">전화번호를 입력해주세요!</Label>
                <Input
                  className="user"
                  name="user-phonenum"
                  value={phonenum}
                  required
                  onChange={onChangePhonenum}
                />
              </FormItem>
            </FormList>
            <ButtonContainer>
              <Button className="button" type="primary" onClick={onSubmit}>
                가입하기
              </Button>
            </ButtonContainer>
          </AccountForm>
        </AccountFormContainer>
      </AccountPageContainer>
    </>
  );
}

export default Join;
