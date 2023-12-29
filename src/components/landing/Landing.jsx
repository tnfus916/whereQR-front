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

function Landing() {
  return (
    <>
      <LandingContainer>
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
