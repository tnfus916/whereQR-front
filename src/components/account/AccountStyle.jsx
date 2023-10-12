import styled from "styled-components";

export const AccountPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background: #ffbc40; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountFormContainer = styled.div`
  width: 60%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  color: black;
  box-shadow: 0 0 10px 0 rgba(255, 148, 60, 0.4);
`;

export const AccountForm = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  color: black;
`;

export const Label = styled.label`
  width: 90%;
  border-radius: 8px;
  font-size: 0.5rem;
  font-weight: 600;
  display: inline-block;
  justify-content: space-between;
  z-index: 10;
  .red {
    color: red;
  }
`;

export const Input = styled.input`
  margin-top: 1%;
  width: 100%;
  border: 0px;
  border-bottom: 1px solid black;
  /* border-radius: 5px; */
  line-height: 1rem;
  font-size: 1rem;
  /* padding-left: 0.5rem; */
  /* padding-right: 0.5rem; */
  display: flex;
  justify-content: space-between;
  z-index: 10;
  margin-bottom: 0.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  background: #ffbc40;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 500;
  width: 50%;
  border: 1px solid #ffbc40;
  border-radius: 4px;
  display: inline-block;
  z-index: 10;
  margin-top: 3%;

  /* Second Nav */
  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    font-size: 1.2rem;
    font-weight: 700;
  } */
`;
