import { useEffect, useState } from 'react';
import styled from 'styled-components';

import qrcode from '../assets/qrcode_image.png';
import title from '../assets/landing_title.png';
import descript from '../assets/landing_descript.png';
import user_guide from '../assets/user_guide.png';
import helper_guide from '../assets/helper_guide.png';
import community from '../assets/community.png';

export const LandingContainer = styled.div`
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
      <LandingContainer darkness={darkness}>
        <ContentsContainer>
          <ImageContainer>
            <img src={title} width="160" alt="" />
          </ImageContainer>
          <ImageContainer>
            <img src={qrcode} width="160" alt="" />
          </ImageContainer>
          <ImageContainer>
            <img src={descript} width="160" alt="" />
          </ImageContainer>
          <GuideContainer>
            <Text>사용자 가이드 </Text>
            <ImageContainer>
              <img src={user_guide} width="160" alt="" />
            </ImageContainer>
          </GuideContainer>
          <GuideContainer>
            <Text>습득자 가이드 </Text>
            <ImageContainer>
              <img src={helper_guide} width="160" alt="" />
            </ImageContainer>
          </GuideContainer>
          <GuideContainer>
            <Text>커뮤니티</Text>
            <ImageContainer>
              <img src={community} width="160" alt="" />
            </ImageContainer>
          </GuideContainer>
        </ContentsContainer>
      </LandingContainer>
    </>
  );
}

export default Landing;
