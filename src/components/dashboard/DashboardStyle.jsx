import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  width: 1.2rem;
  border: none;
  background-color: transparent;
`;

export const InputContainer = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 5%;
  padding: 10px;
  background-color: white;
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
  width: 3rem;
  background-color: rgb(124, 172, 255);
  display: flex;
  justify-content: center;
  align-items: center;
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
