import {
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  ResumeButton,
  Span,
  SubTitle,
  TextLoop,
  Title,
} from "./HeroStyle";
import { Bio } from "../../data/constants";
import  Typewriter  from "typewriter-effect";
import Sachin from "../../images/sachin_img_4.jpg"
import HeroBgAnimation from "../HeroBgAnimation";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation/>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Check Resume
            </ResumeButton>
            
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={Sachin} alt="Hero"/>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
