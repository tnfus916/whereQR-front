import styled from "styled-components";

export const QRPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  // background:linear-gradient(to right top,white,#15cdfc);
  background: #ffbc40;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QRReaderContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QRReaderTitle = styled.h1`
  font-size: 1.2rem;
  margin: 2rem;
  color: orange;
`;

export const QRFormContainer = styled.div`
  width: 60%;
  height: 60%;
  /* padding: 50px 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  color: black;
`;
export const QRForm = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  color: black;
  /* border: 1px solid #256ce1; */
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
`;
export const Label = styled.label`
  width: 70%;
  color: black;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 700;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;
export const Input = styled.input`
  width: 70%;
  border: 1px solid;
  border-radius: 8px;
  line-height: 2rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const Button = styled.button`
  background: #ffbc40;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  width: 50%;
  border: 1px solid #ffbc40;
  border-radius: 4px;
  /* line-height: 2rem; */
  /* padding-left: 0.5rem;
  padding-right: 0.5rem; */
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
export const Div = styled.div`
  width: 50%;
  height: 70%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  text-align: enter;
  align-items: center;
  flex-direction: column;
  background: white;
  color: black;
  border-radius: 10px;
`;

export const Div2 = styled.div`
  width: 50%;
  height: 50%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
  background: white;
`;

export const Div3 = styled.div`
  width: 70%;
  height: 670px;
  padding: 15px 15px;
  border-radius: 10px;
  background: white;
  text-align: center;
`;

export const QDiv = styled.div`
  width: 100%;
  height: 100vh;
  // background:linear-gradient(to right top,white,#15cdfc);
  background: #639cd9;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const A = styled.a`
  font-size: 1.4rem;
  color: black;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
export const P = styled.p`
  font-size: 0.9rem;
  color: #15cdfc;
  outline: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #15cdfc;
  display: flex;
`;

export const TD2 = styled.td`
  font-size: 1.3rem;
  font-weight: 500;
  width: 50%;
  padding: 10px;
  vertical-align: top;
`;

export const Table = styled.table`
  width: 99%;
  margin: auto;
  text-align: center;
  justify-content: space-between;
  z-index: 10;
`;
