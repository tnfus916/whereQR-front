import styled from "styled-components";

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
  width: 90%;
  background: #256ce1;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  border: 1px solid #256ce1;
  border-radius: 8px;
  line-height: 2rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: inline-block;
  z-index: 10;
  margin-left: 5%;
  margin-top: 3%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    font-size: 1.2rem;
    font-weight: 700;
  }
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

export const TD = styled.td`
  margin-top: 1%;
  width: 90%;
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
  text-align: left;
`;

export const TH = styled.th`
  width: 20%;
  // color: #15cdfc;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 700;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  justify-content: space-between;
  z-index: 10;
`;

export const Table = styled.table`
  width: 99%;
  margin: auto;
  text-align: center;
  justify-content: space-between;
  z-index: 10;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
`;
