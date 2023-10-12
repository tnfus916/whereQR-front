import {
  Contents,
  ContentsContainer,
  ImageContainer,
  LandingContainer,
  Paragraph,
} from "./LandingStyle";

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
              <div>분실물을 QR 코드로 찾아드립니다! 뿌우-</div>
            </Paragraph>
            <Paragraph>
              <div>&lt;사용자 가이드&gt;</div>
              <div>1. 소지품에 QR 스티커를 부착해주세요.</div>
              <div>2. 카메라로 QR 코드를 스캔한 후 등록해주세요.</div>
              <div>3. QR 코드에 메모와 연락처를 남겨주세요!</div>
            </Paragraph>
            <Paragraph>
              <div>&lt;습득자 가이드&gt;</div>
              <div>1. 카메라로 QR 코드를 스캔해주세요. </div>
              <div>2. 해당 연락처로 분실물 주인에게 연락해주세요!</div>
            </Paragraph>
          </Contents>
        </ContentsContainer>
      </LandingContainer>
    </>
  );
}

export default Landing;
