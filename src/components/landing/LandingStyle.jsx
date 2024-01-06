import styled from 'styled-components';

export const LandingContainer = styled.div`
  margin-top: 50px;
  padding-bottom: 100px;
  width: 100%;
  height: 500%;
  display: flex;
  justify-content: center;
  ${({ darkness }) => `
    background: linear-gradient(to bottom, rgba(255, 255, 255, ${darkness}), rgba(224, 238, 251, ${darkness}));
  `}
`;

export const ContentsContainer = styled.div`
  text-align: center;
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const ImageContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const GuideContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  ${ImageContainer} {
    width: 90%;
    margin-top: 10px;
    justify-content: flex-start;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 800;
  margin-left: 5px;
  margin-top: 7px;
  margin-bottom: 5px;
  color: #6093f9;
`;
