import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const ChatroomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const MyBubbleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const MyBubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 3px 20px 3px 0;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
`;

export const CounterPartBubbleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const CounterPartBubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  word-wrap: break-word;
  background-color: rgb(124, 172, 255);
  border-radius: 20px;
  padding: 10px 20px;
  margin: 3px 0px 5px 20px;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
`;

export const ChatContainer = styled.div`
  height: 93%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
  overflow-y: visible;
`;

export const InputContainer = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 10%;
  padding: 10px;
`;

export const InputBox = styled.input`
  height: 90%;
  width: 77%;
  border: none;
  border-radius: 20px;
  background-color: #f5f5f5;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const Button = styled.button`
  height: 90%;
  width: 16%;
  background-color: rgb(124, 172, 255);
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  &:disabled {
    background-color: #f5f5f5;
    color: #7e7878;
  }
`;
