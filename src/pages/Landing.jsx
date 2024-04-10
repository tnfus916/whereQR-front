import { useEffect, useState } from 'react';
import styled from 'styled-components';

import qrcode from '../assets/qrcode_image.svg';
import title from '../assets/landing_title.svg';
import descript from '../assets/landing_descript.svg';

export const LandingContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ $darkness }) => `
    background: linear-gradient(to bottom, rgba(255, 255, 255, ${$darkness}), rgba(188, 206, 251, ${$darkness}));
  `}
`;

export const ContentsContainer = styled.div`
  text-align: center;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const Image = styled.img`
  width: 9rem;
  margin-bottom: 50px;
`;

export const GuideContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: rgba(83, 83, 83, 0.2) 0px 8px 20px;
`;

export const Title = styled.div`
  margin-bottom: 0.7rem;
  font-size: 0.85rem;
  font-weight: 800;
  color: rgb(96, 147, 249);
`;

export const Text = styled.div`
  font-size: 0.9rem;
  line-height: 1.3rem;
  text-align: left;
`;

function Landing() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const darkness = 0.5 + scrollPercentage * 0.5;

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPercentage =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트되면 이벤트 리스너를 제거합니다
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <LandingContainer $darkness={ darkness }>
        <ContentsContainer>
          <Image src={ title } width="160" alt="" />
          <Image src={ qrcode } width="160" alt="" />
          <Image src={ descript } width="160" alt="" />
          <GuideContainer>
            <Title>사용자 가이드 </Title>
            <Text>물건 분실에 대비해 소지품에 QR코드를 부착해 물건 분실 시 보다 손쉽게 물건을 찾을 수 있어요.</Text>
          </GuideContainer>
          <GuideContainer>
            <Title>습득자 가이드 </Title>
            <Text>분실물을 습득한 후 QR코드를 스캔하면 물건 주인에게 연락이 가능해요.</Text>
          </GuideContainer>
          <GuideContainer>
            <Title>커뮤니티</Title>
            <Text>QR코드가 부착되어 있지 않은 분실물도 게시판을 통해서 찾을 수 있어요. 분실물의 유형, 분실 지역, 날자를 설정해 찾고자 하는 분실물을 쉽게 검색할 수 있어요.</Text>
          </GuideContainer>
        </ContentsContainer>
      </LandingContainer>
    </>
  );
}

export default Landing;
