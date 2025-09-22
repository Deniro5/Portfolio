import styled from "styled-components";
import ProjectList from "./ProjectList";
import Project from "./Project";
import { useState } from "react";
import { Modal } from "../Global/Modal";

function Projects() {
  const [video, setVideo] = useState<string | null>(null);

  return (
    <>
      <ProjectsContainer id="projects">
        <Title> Projects </Title>
        {ProjectList.map((project) => (
          <Project project={project} setVideo={setVideo} key={project.name} />
        ))}
      </ProjectsContainer>

      <Modal open={!!video} onClose={() => setVideo(null)}>
        {video && (
          <VideoContainer>
            <iframe
              src="https://player.vimeo.com/video/76979871?autoplay=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        )}
      </Modal>
    </>
  );
}

const ProjectsContainer = styled.div`
  max-width: 1440px;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  padding: 16px;
  padding-bottom: 32px;
`;

const VideoContainer = styled.div`
  max-width: 900px;
  width: 80vw;
  aspect-ratio: 16 / 9;
  padding-top: 16px;
  & > iframe {
    width: 100%;
    height: 100%;
  }
`;
export default Projects;
