import styled from "styled-components";
import TechBadge from "./TechBadge";
import TechBadgeList from "./TechBadgeList";
import Timeline from "../Timeline";
import { Colors } from "../../styles";

const timelineItems = [
  {
    date: "September 2013 - April 2017",
    title: "Completed University Education",
    description:
      "Attended the University of Toronto, graduating with a Bachelor of Science in Computer Science, specializing in the Software Engineering program. Developed a strong foundation in software design, algorithms, and full-stack development principles.",
  },
  {
    date: "September 2018 - January 2020",
    title: "Worked as Manager of Autoland of Delhi",
    description:
      "Became a manager at a family owned business for just over a year.  During this time I learnt valuable leadership skills whilst on the job, while also continuing to improve my Frontend Development skills through study and the completion of projects.",
  },
  {
    date: "August 2020 - October 2020",
    title: "Worked at Oxio",
    description:
      "After things had calmed down a little bit with the pandemic, I began looking for my first job as a Frontend Developer. I was hired by Oxio, where I worked on various features for the company's customer service tool, updated webpages on their customer facing website and improved the QA process.",
  },

  {
    date: "November 2020 - August 2022",
    title: "Worked at Mosaic",
    description:
      "At Mosaic I architected and built a variety of new features for a customer facing SaaS application using React, Javascript / Typescript, Redux and CSS. Additionally, my day to day work included updating the company's marketing website and promptly resolving customer issues.",
  },
  {
    date: "September 2022 - Present",
    title: "Working at Sonatype",
    description:
      "At Sonatype, I developed several features for Maven Central, enhanced security, added comprehensive test coverage, and completed a monorepo migration for improved reliability and scalability, while also contributing to the customer experience website, React component library, and feature design.",
  },
];

function About() {
  return (
    <AboutContainer id="about">
      <Title> About Me </Title>
      <Flex>
        <Column>
          <Group>
            <Subtitle>Who Am I?</Subtitle>
            <Text>
              Hi! My name is Ryan! I was born in London, England, and moved to
              Toronto, Ontario at the age of 10, which has been home ever since.
              I’ve been programming for over 15 years and hold a Bachelor’s
              Degree in Computer Science from the University of Toronto.
              Professionally, I’ve worked as a Frontend Engineer since August
              2020, with experience at Oxio, Mosaic, and Sonatype.
              <br />
              <br />
              Outside of work, I enjoy building side projects, watching and
              playing sports, spending time with family, exploring nature, and
              learning new technologies.
            </Text>
          </Group>
          <Group>
            <Subtitle>Why Front End Development?</Subtitle>
            <Text>
              While studying Computer Science at university, I was drawn to
              frontend development because it combined logic, problem-solving,
              and creativity. I enjoyed it so much that between classes and
              semesters I always kept at least one extra project in progress to
              keep learning. As someone passionate about growth, I find frontend
              especially exciting because the field is constantly evolving with
              new innovations and optimizations — there’s always something new
              to explore.
            </Text>
          </Group>
        </Column>

        <Divider />

        <Column>
          <Group>
            <Subtitle>My Timeline</Subtitle>
            <Timeline timelineItems={timelineItems} />
          </Group>
          <Group>
            <Subtitle>Languages, Frameworks, Tools</Subtitle>
            <TechBadgeContainer>
              {TechBadgeList.map((badge) => (
                <TechBadge name={badge.name} imgsrc={badge.imgsrc} />
              ))}
            </TechBadgeContainer>
          </Group>
        </Column>
      </Flex>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  max-width: 1440px;
  padding-top: 32px;
  margin: auto;
`;
const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  padding: 16px;
  padding-bottom: 32px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 36px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 8px;
    gap: 20px;
  }
`;

const Divider = styled.div`
  width: 1px;
  background: ${Colors.offWhite};
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.black};
  margin-top: 0;
  margin-bottom: 24px;
`;

const Text = styled.p`
  color: ${Colors.darkGrey};
  margin: 0;
`;

const Column = styled.div`
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const TechBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 420px;
  @media (max-width: 900px) {
    max-width: unset;
  }
`;

const Group = styled.div``;

export default About;
