import styled from 'styled-components';

export const QRPageContainer = styled.div`
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 300px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

// qrscan, qradd page -----------------------------
export const QRReaderContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const QRReaderTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: rgb(36, 114, 250);
`;

// qredit page -------------------------------------
export const QRFormContainer = styled.div`
  width: 80%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  color: black;
  box-shadow: 0 0 10px 0 rgba(76, 138, 245, 0.4);
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
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const Label = styled.label`
  width: 80%;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  display: inline-block;
  justify-content: space-between;
  z-index: 10;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  margin-top: 1%;
  width: 80%;
  border: 0px;
  border-bottom: 1px solid black;
  /* border-radius: 5px; */
  line-height: 1rem;
  font-size: 0.8rem;
  /* padding-left: 0.5rem; */
  /* padding-right: 0.5rem; */
  display: flex;
  justify-content: space-between;
  z-index: 10;
  margin-bottom: 0.5rem;
`;

// qrdetail page -------------------------------------

export const DataListContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  box-shadow: 0 0 10px 0 rgba(76, 138, 245, 0.4);
  padding: 50px 15px;
`;

export const DataContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5px;
`;

export const Data = styled.div`
  width: 100%;
  height: 10px;
  border: 0px;
  border-bottom: 1px solid black;
  line-height: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  margin-bottom: 0.5rem;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  background: rgb(36, 114, 250);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  width: 5rem;
  height: 1.5rem;
  border: 1px solid rgb(36, 114, 250);
  border-radius: 4px;
  display: inline-block;
  z-index: 10;
  margin-top: 3%;
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 10px;
  color: rgb(36, 114, 250);
  margin-bottom: 5px;
`;
