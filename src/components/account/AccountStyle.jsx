import styled from "styled-components";

export const AccountPageContainer = styled.div`
  width: 100%;
  height: 100vh;
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
  box-shadow: 0 0 10px 0 rgba(0, 92, 251, 0.3);
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

export const FormList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
    color: #f08888;
  }
`;

export const Input = styled.input`
  margin-top: 1%;
  width: 100%;
  border: 0px;
  border: 1px solid #3877f5;
  border-radius: 5px;
  line-height: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  margin: 0.5rem 0 0.7rem 0;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  background: #3877f5;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 500;
  width: 50%;
  border: 1px solid #3877f5;
  border-radius: 4px;
  display: inline-block;
  z-index: 10;
  margin-top: 3%;
`;
