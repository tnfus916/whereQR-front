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
} from '../../components/account/AccountStyle';
import axiosInstance from '../../services/axios';

function Join() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const kakaoId = queryParams.get('kakaoid');
  const username = queryParams.get('username');
  const [phonenum, setPhonenum] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const user_data = {
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
                  value={ phonenum }
                  required
                  onChange={ onChangePhonenum }
                />
              </FormItem>
            </FormList>
            <ButtonContainer>
              <Button className="button" type="primary" onClick={ onSubmit }>
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
