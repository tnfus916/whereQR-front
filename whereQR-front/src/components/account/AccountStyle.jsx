import styled from "styled-components";

export const AccountPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  // background:linear-gradient(to right top,white,#15cdfc);
  background: #639cd9;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountFormContainer = styled.div`
  width: 60%;
  height: 80%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  color: black;
`;
export const AccountForm = styled.form`
  width: 100%;
  height: 80%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  color: black;
`;

export const Div = styled.div`
  width: 60%;
  height: 80%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  color: black;
`;

export const Div2 = styled.div`
  width: 60%;
  height: 52%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  background: white;
  border-radius: 20px;
`;

export const Input = styled.input`
  margin-top: 1%;
  width: 50%;
  border: 1px solid;
  border-radius: 8px;
  line-height: 2rem;
  font-size: 1.4rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  margin-bottom: 3%;
`;

export const Label = styled.label`
  width: 50%;
  // color: #15cdfc;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 700;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  display: inline-block;
  justify-content: space-between;
  z-index: 10;
`;

export const Button = styled.button`
  background: #256ce1;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  width: 50%;
  border: 1px solid #256ce1;
  border-radius: 8px;
  line-height: 2rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: inline-block;
  z-index: 10;
  margin-bottom: 3%;

  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
