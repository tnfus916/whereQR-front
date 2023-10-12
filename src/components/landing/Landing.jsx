import {
  Contents,
  ContentsContainer,
  ImageContainer,
  LandingContainer,
  Paragraph,
} from "./LandingStyle";
import styled from "styled-components";

function Landing() {
  return (
    <>
      <LandingContainer>
        <ContentsContainer>
          <ImageContainer>
            <img src="src\assets\logo.png" alt="sdf" />
          </ImageContainer>
          <Contents>
            <Paragraph>
              <Text>분실물을 QR 코드로 찾아드립니다! 뿌우-</Text>
            </Paragraph>
            <Paragraph>
              <Text>&lt;사용자 가이드&gt;</Text>
              <Text>1. 소지품에 QR 스티커를 부착해주세요.</Text>
              <Text>2. 카메라로 QR 코드를 스캔한 후 등록해주세요.</Text>
              <Text>3. QR 코드에 메모와 연락처를 남겨주세요!</Text>
            </Paragraph>
            <Paragraph>
              <Text>&lt;습득자 가이드&gt;</Text>
              <Text>1. 카메라로 QR 코드를 스캔해주세요. </Text>
              <Text>2. 해당 연락처로 분실물 주인에게 연락해주세요!</Text>
            </Paragraph>
          </Contents>
        </ContentsContainer>
      </LandingContainer>
    </>
  );
}

export default Landing;

export const Text = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.8rem;
  /* font-weight: bold; */
  margin-left: 5px;
  margin-top: 7px;
  color: orange;
`;
