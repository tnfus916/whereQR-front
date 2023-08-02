import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Label,
  AccountPageContainer,
  Input,
  Button,
  AccountFormContainer,
  AccountForm,
} from "./AccountStyle";

function Join() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [roles, setRoles] = useState("");

  // 로그인 API 호출
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    // console.log({
    //   email,
    //   password,
    //   name,
    //   address,
    //   phonenum,
    // });

    // console.log({
    //   username,
    //   password,
    //   age,
    //   roles,
    // });
    const user_data = {
      // email: email,
      // nickname: name,
      username: username,
      password: password,
      age: age,
      // address: address,
      // phonenumber: phonenum,
      roles: roles,
    };

    axios
      .post("http://13.124.184.159:8080/member/signup/", user_data)
      .then((res) => {
        console.log(res.data);
      })
      .then(navigate(`/`)); //homepage but with the token
  };

  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeRoles = (e) => {
    setRoles(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  // const onChangeAddress = (e) => {
  //   setAddress(e.target.value);
  // };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  // const onChangePhonenum = (e) => {
  //   setPhonenum(e.target.value);
  // };
  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  return (
    <>
      <AccountPageContainer className="signup">
        <AccountFormContainer>
          <AccountForm>
            {/* <Label className="label">이메일</Label>
            <Input
              className="user"
              name="user-id"
              value={email}
              required
              onChange={onChangeEmail}
            /> */}
            <Label className="label">이름</Label>
            <Input
              className="user"
              name="user-nick"
              value={username}
              required
              onChange={onChangeUsername}
            />
            <Label className="label">권한</Label>
            <Input
              className="user"
              name="user-nick"
              value={roles}
              required
              onChange={onChangeRoles}
            />
            <Label className="label">비밀번호</Label>
            <Input
              className="user"
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
            <Label className="label">비밀번호 재확인</Label>
            <Input
              className="user"
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordChk}
            />
            {passwordError && (
              <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
            )}
            {/* <Label className="label">주소</Label>
            <Input
              className="user"
              name="user-address"
              value={address}
              required
              onChange={onChangeAddress}
            /> */}
            <Label className="label">나이</Label>
            <Input
              className="user"
              name="user-address"
              value={age}
              required
              onChange={onChangeAge}
            />
            {/* <Label className="label">연락처</Label>
            <Input
              className="user"
              name="user-phonenum"
              value={phonenum}
              required
              onChange={onChangePhonenum}
            /> */}
            <Button className="button" type="primary" onClick={onSubmit}>
              가입하기
            </Button>
          </AccountForm>
        </AccountFormContainer>
      </AccountPageContainer>
    </>
  );
}

export default Join;
