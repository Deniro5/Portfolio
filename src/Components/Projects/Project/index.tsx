import styled from "styled-components";
import { ProjectType, Video } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Colors, Spacing } from "../../../styles";
import { ButtonLink } from "../../Global/ButtonLink";
import { Button } from "../../Global/Button";
type ProjectProps = {
  project: ProjectType;
  setVideo: React.Dispatch<React.SetStateAction<Video | null>>;
};

function Project({ project, setVideo }: ProjectProps) {
  const { name, imgsrc, description, demoLink, gitLink, stack, video } =
    project;

  const handleOverlayClick = () => {
    if (video) {
      setVideo(video);
    } else {
      window.open(demoLink, "_blank");
    }
  };
  return (
    <Card key={name}>
      <CardWrapper>
        <ImageWrapper>
          <Overlay onClick={handleOverlayClick}>
            <OverlayContent>
              <OverlayButton tabIndex={-1}>
                <FontAwesomeIcon
                  icon={video ? faPlay : faArrowUpRightFromSquare}
                  color="white"
                  style={{
                    width: "5em",
                    height: "5em",
                  }}
                />
              </OverlayButton>
            </OverlayContent>
          </Overlay>
          <Image src={imgsrc} alt={name} />
        </ImageWrapper>

        <Content>
          <TitleRow>
            <Title>{name}</Title>
          </TitleRow>

          <Description>{description}</Description>

          <TechList>
            {stack.map((tech: string, techIndex: number) => (
              <Badge key={techIndex}>{tech}</Badge>
            ))}
          </TechList>

          <Actions>
            {video && (
              <Button
                size="sm"
                variant="filled"
                onClick={() => setVideo(video)}
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  style={{
                    width: "0.8em",
                    height: "0.8em",
                  }}
                />
                Watch Video
              </Button>
            )}
            {demoLink && (
              <ButtonLink
                size="sm"
                variant="filled"
                href={demoLink}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{
                    width: "0.8em",
                    height: "0.8em",
                  }}
                />
                Live Demo
              </ButtonLink>
            )}
            <ButtonLink
              variant="outlined"
              size="sm"
              href={gitLink}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              Code
            </ButtonLink>
          </Actions>
        </Content>
      </CardWrapper>
    </Card>
  );
}

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  height: 100%;
  width: 100%;

  &:hover {
    opacity: 1;
  }
`;

const Card = styled.div`
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 16px;
  text-align: left;
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);

    ${Overlay} {
      opacity: 1;
    }
  }

  @media (min-width: 1024px) {
    grid-column: span 2 / span 2;
  }
`;

const CardWrapper = styled.div<{ featured?: boolean }>`
  display: flex;
  align-items: stretch; /* stretch both children to tallest */
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div<{ featured?: boolean }>`
  display: flex;
  align-items: stretch;
  position: relative;

  @media (min-width: 1024px) {
    width: 50%;
    border-right: 1px solid ${Colors.offWhite};
  }
`;

const Image = styled.img`
  width: 100%; /* fill wrapper width */
  height: 100%; /* match wrapper height */
  display: block;
  max-height: 400px;
  @media (max-width: 1533px) {
    max-height: 460px;
  }
  @media (max-width: 1024px) {
    max-height: 400px;
  }
`;

const Content = styled.div<{ featured?: boolean }>`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const OverlayContent = styled.div`
  position: relative;
  z-index: 2;
`;

const OverlayButton = styled.button`
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: none;
  display: flex;

  &:hover {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.6);
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
`;

const Title = styled.h3`
  margin-top: ${Spacing.xs};
  margin-bottom: 0;
  font-weight: 500;
`;

const Description = styled.p`
  color: ${Colors.darkGrey};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Badge = styled.div`
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid lightgrey;
  border-radius: 8px;
`;

export default Project;
