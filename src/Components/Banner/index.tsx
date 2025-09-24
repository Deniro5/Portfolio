import styled from "styled-components";
import FaceImage from "../../assets/faceimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BannerImage from "../../assets/banner.jpg";
import { Colors, FontSizes, Spacing } from "../../styles";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <BannerContainer id="home">
      <Content>
        <ImageContainer>
          <img src={FaceImage} />
        </ImageContainer>
        <Info>
          <Title> Dean Towheed </Title>
          <Subtitle> Frontend Developer based in Toronto</Subtitle>
          <Subtitle>5+ years of professional experience</Subtitle>

          <Links>
            <LinkContainer>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <Link href="https://www.linkedin.com/in/dean-towheed">
                www.linkedin.com/in/dean-towheed
              </Link>
            </LinkContainer>
            <LinkContainer>
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <Link href="https://www.github.com/deniro5">
                www.github.com/deniro5
              </Link>
            </LinkContainer>
            <LinkContainer>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <Link href="mailto:deantowheed@gmail.com">
                Deantowheed@gmail.com
              </Link>
            </LinkContainer>
          </Links>
        </Info>
      </Content>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${BannerImage}) no-repeat center center;
  background-size: cover;
  background-blend-mode: darken;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 590px;
  height: 100vh;
  width: 100%;
  margin-top: -60px;
  @media (max-width: 768px) {
    height: fit-content;
    padding-bottom: 64px;
    max-height: unset;
  }
`;

const Content = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  gap: 64px;
  margin: auto;
  padding: 0px 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 80px;
    gap: 0px;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 320px;
    height: 320px;
    border-radius: 320px;
  }

  @media (max-width: 1024px) {
    img {
      width: 260px;
      height: 260px;
    }
  }
`;

const Info = styled.div`
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  color: ${Colors.white};
  font-size: 72px;
  margin-bottom: 16px;
  margin-top: 0;
  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    margin-top: 24px;
    font-size: 32px;
  }
  font-weight: 500;
`;

const Subtitle = styled.h2`
  color: #e4e4e4;
  font-size: 24px;
  font-weight: 400;
  margin: 4px 4px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Links = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    margin-top: 48px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing.lg};
  path {
    fill: white;
  }
  svg {
    margin-top: 2px;
    width: 20px;
  }
`;

const Link = styled.a`
  color: ${Colors.white};
  font-weight: 600;
  font-size: ${FontSizes.md};
`;

export default Header;
