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
            <div>&lt;사용자&gt;</div>
            <br />
            <div>1. 물건에 QR 스티커를 부착해주세요.</div>
            <div>2. 로그인을 한 후 QR 코드를 등록해주세요.</div>
            <div>3. 물건을 잃어버렸을 때 </div>
            <br />
            <br />
            <div>&lt;분실물 습득자&gt;</div>
            <br />
            <div>1. Scan 페이지에서 QR 코드를 스캔한다.</div>
            <div>2. 물건 주인에게 연락을 한다.</div>
          </Contents>
        </ContentsContainer>
      </LandingContainer>
    </>
  );
}

export default Landing;
