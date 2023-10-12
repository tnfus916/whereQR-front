import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Label,
  AccountPageContainer,
  Input,
  Button,
  AccountFormContainer,
  AccountForm,
  ButtonContainer,
} from "./AccountStyle";
import axios from "axios";

function Join() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [roles, setRoles] = useState(["USER"]);
  const [phonenum, setPhonenum] = useState("");

  // 로그인 API 호출
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    console.log({
      username,
      password,
      phonenum,
      roles,
    });

    const user_data = {
      username: username,
      password: password,
      roles: roles,
      phoneNumber: phonenum,
    };

    axios
      .post("http://localhost:8080/member/signup", user_data)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => navigate("/login"));
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  // const onChangeAge = (e) => {
  //   setAge(e.target.value);
  // };

  const onChangePhonenum = (e) => {
    setPhonenum(e.target.value);
  };

  return (
    <>
      <AccountPageContainer className="signup">
        <AccountFormContainer>
          <AccountForm>
            <Label for="user">아이디</Label>
            <Input
              id="user"
              name="user-nick"
              value={username}
              required
              onChange={onChangeUsername}
            />
            <Label for="password">비밀번호</Label>
            <Input
              id="password"
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
            <Label for="password-check">비밀번호 재확인</Label>
            <Input
              id="password-check"
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordChk}
            />
            {passwordError && (
              <div
                style={{
                  color: "red",
                  fontSize: "0.5rem",
                  marginBottom: "15px",
                }}
              >
                비밀번호가 일치하지 않습니다.
              </div>
            )}
            {/* <Label className="label">나이</Label>
            <Input
              className="user"
              name="user-address"
              value={age}
              required
              onChange={onChangeAge}
            /> */}
            <Label className="label">전화번호</Label>
            <Input
              className="user"
              name="user-phonenum"
              value={phonenum}
              required
              onChange={onChangePhonenum}
            />
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
