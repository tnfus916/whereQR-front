import React from "react";
import { Contents, ContentsContainer, LandingContainer } from "./LandingStyle";

function Landing() {
  return (
    <>
      <LandingContainer>
        <ContentsContainer>
          <Contents>
            <div>분실물을 QR 코드로 찾아드립니다! 뿌우-</div>
            <br />
            <br />
            <div>&lt;사용자 가이드&gt;</div>
            <br />
            <div>1. 물건에 QR 스티커를 부착해주세요.</div>
            <div>2. 로그인을 한 후 QR 코드를 등록해주세요.</div>
            <div>
              3. 나중에 습득하신 분이 찾아드릴 수 있도록 QR 코드에 메모를
              남겨주세요!
            </div>
            <br />
            <br />
            <div>&lt;습득자 가이드&gt;</div>
            <br />
            <div>1. Scan 페이지에서 QR 코드를 스캔해주세요.</div>
            <div>2. 화면에 보이는 메모를 보고 분실물을 찾아주시면 됩니다!</div>
          </Contents>
        </ContentsContainer>
      </LandingContainer>
    </>
  );
}

export default Landing;
