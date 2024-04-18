import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import axiosInstance from "../../services/axios";
import { districtList, dongList, typeList } from "../../constants/data";

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 7%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 13rem;
  gap: 1rem;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 7%;
`;

const SelectContainer = styled.div`
  width: 83%;
  display: flex;
  gap: 1rem;
`;

const Select = styled.select`
  height: 1.5rem;
  border: 1px solid black;
`;

const TitleInput = styled.input`
  height: 7%;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  font-size: 0.8rem;
`;

const ContentInput = styled.textarea`
  height: 40%;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  font-size: 0.8rem;
`;

const ButtonContainer = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  margin-top: 0.3rem;
`;

const Button = styled.button`
  height: 70%;
  width: 20%;
  border: none;
  border-radius: 15%;
  background-color: #6093f9;
  margin: 10px;
`;

const Guide = styled.div`
  height: 15%;
  width: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  position: fixed;
  bottom: 10%;
  font-size: 0.8rem;
`;

const Textarea = styled.textarea`
  height: 10rem;
  width: 100%;
  font-size: 0.8rem;
  resize: none;
`;

function WritePost() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [districtValue, setDistrictValue] = useState("구 선택");
  const [dongValue, setDongValue] = useState("동 선택");

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const onSelectDistrict = (e) => {
    setDistrictValue(e.target.value);
    setDongValue("동 선택");
  };

  const onValid = async (data) => {
    console.log(data);
    const postdata = {
      title: data.title,
      content: data.content,
      lostedType: data.lostedType,
      lostedCity: data.district,
      lostedDistrict: data.dong,
    };

    const res = await axiosInstance.post("/dashboard/create/", postdata);
    console.log(res);

    if (res.data.status === "SUCCESS") {
      alert("게시글이 등록되었습니다.");
      navigate("/dashboard");
    } else {
      alert("게시글 등록에 실패하였습니다.");
      return;
    }
  };

  useEffect(() => {
    console.log(districtValue);
    console.log(dongList[districtValue]);
  }, [districtValue]);

  return (
    <PageContainer>
      <FormContainer>
        <Title>분실물 신고</Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <input type="text" placeholder="제목" {...register("title")} />

          <SelectContainer>
            <Select
              {...register("district")}
              onChange={onSelectDistrict}
              defaultValue=""
            >
              <option value="">구 선택</option>
              {districtList.map((d, index) => (
                <option key={index} value={d}>
                  {d}
                </option>
              ))}
            </Select>
            <Select key={districtValue} {...register("dong")}>
              <option value="">동 선택</option>
              {dongList[districtValue]?.map((d, index) => (
                <option key={index} value={d}>
                  {d}
                </option>
              ))}
            </Select>
          </SelectContainer>
          <Select {...register("lostedType")}>
            {typeList.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
          </Select>

          <Textarea placeholder="내용" {...register("content")} />

          <ButtonContainer>
            <input type="submit" value="등록" />
            <button onClick={handleCancel}>취소</button>
          </ButtonContainer>
        </Form>

        <Guide>
          제목을 기반으로 게시글이 검색되기 때문에 제목에 키워드를 넣어주시면
          주인이 찾기 쉬워집니다!
        </Guide>
      </FormContainer>
    </PageContainer>
  );
}

export default WritePost;
