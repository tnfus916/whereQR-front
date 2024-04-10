import { useEffect } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import axiosInstance from '../../services/axios';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 7%;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 7%;
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
  justify-content: center;
  align-items: center;
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

function WritePost() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('게시글 입력 post api');
    const data = {
      title: '충무로역에서 맥북',
      content: '충무로역에서 맥북을 잃어버렸습니다. 보신분은 연락주세요.',
      lostedType: '전자기기',
      lostedCity: '서울',
      lostedDistrict: '중구',
    };

    axiosInstance.post('/dashboard/create/', data).then((res) => {
      console.log(res.data);
    });
    navigate('/dashboard');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <PageContainer>
      <Form>
        <Title>분실물 신고</Title>
        <TitleInput placeholder="제목"></TitleInput>
        <ContentInput placeholder="내용"></ContentInput>
        {/* 시구 선택, 카테고리 선택 UI */ }
        <ButtonContainer>
          <Button onClick={ handleClick }>등록</Button>
          <Button onClick={ handleCancel }>취소</Button>
        </ButtonContainer>
        <Guide>
          제목을 기반으로 게시글이 검색되기 때문에 제목에 키워드를 넣어주시면
          주인이 찾기 쉬워집니다!
        </Guide>
      </Form>
    </PageContainer>
  );
}

propTypes.AddPost = {
  isWrite: propTypes.bool.isRequired,
};

export default WritePost;
