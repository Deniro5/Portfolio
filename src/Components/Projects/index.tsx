import styled from "styled-components";
import ProjectList from "./ProjectList";
import Project from "./Project";
import { useState } from "react";
import { Modal } from "../Global/Modal";
import { Video } from "./types";

function Projects() {
  const [video, setVideo] = useState<Video | null>(null);

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
              src={`https://player.vimeo.com/video/${video.code}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title={video.name}
              frameBorder="0"
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
