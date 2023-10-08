import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContentsContainer = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  padding: 5px;
  background: white;
  // background-image : url(../logo192.png);
  // background-size: cover;
`;

export const Contents = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: orange;
  display: table;
  margin: auto;
`;
