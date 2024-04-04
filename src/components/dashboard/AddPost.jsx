import { useEffect } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 10%;
`;

const Form = styled.form`
  height: 60%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 7%;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 7%;
`;

const TitleInput = styled.input`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 40%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  height: 10%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 20%;
  height: 70%;
  border: none;
  border-radius: 15%;
  background-color: #6093f9;
  margin: 10px;
`;

const Guide = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function AddPost({ setIsWrite }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('게시글 입력 post api');
  };

  const handleCancel = () => {
    // 내 게시글 상세 페이지로 이동
    // navigate('/mypage');
    setIsWrite(false);
  };

  // useEffect(() => {
  //   if (!isWrite) {
  //     return () => {
  //       console.log('AddPost 컴포넌트 사라짐');
  //     };
  //   }
  // }, [isWrite]);

  return (
    <ModalContainer>
      <Form>
        <Title>분실물 신고</Title>
        <TitleInput placeholder="제목"></TitleInput>
        <ContentInput placeholder="내용"></ContentInput>
        {/* 시구 선택, 카테고리 선택 UI */}
        <ButtonContainer>
          <Button onClick={handleClick}>등록</Button>
          <Button onClick={handleCancel}>취소</Button>
        </ButtonContainer>
        <Guide>
          제목을 기반으로 게시글이 검색되기 때문에 제목에 키워드를 넣어주시면
          주인이 찾기 쉬워집니다!
        </Guide>
      </Form>
    </ModalContainer>
  );
}

propTypes.AddPost = {
  isWrite: propTypes.bool.isRequired,
};

export default AddPost;
