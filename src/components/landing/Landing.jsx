import {
  ContentsContainer,
  ImageContainer,
  LandingContainer,
  GuideContainer,
  Text,
} from './LandingStyle';

import qrcode from '../../assets/qrcode_image.png';
import title from '../../assets/landing_title.png';
import descript from '../../assets/landing_descript.png';
import user_guide from '../../assets/user_guide.png';
import helper_guide from '../../assets/helper_guide.png';
import community from '../../assets/community.png';
import { useEffect, useState } from 'react';

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
