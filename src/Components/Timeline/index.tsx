import styled, { keyframes } from "styled-components";
import TimelineItem from "./TimelineItem";
import { useState } from "react";
import { Colors } from "../../styles";

type TimelineItemType = {
  date: string;
  title: string;
  description: string;
};

type TimelineProps = {
  timelineItems: TimelineItemType[];
};

function Timeline({ timelineItems }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = timelineItems[activeIndex];

  return (
    <>
      <TimelineContainer>
        {timelineItems.map((_, index) => (
          <TimelineItem
            isPast={index < activeIndex}
            isActive={index === activeIndex}
            setActive={() => {
              setActiveIndex(index);
            }}
          />
        ))}
      </TimelineContainer>
      <ActiveItemInfo key={activeIndex}>
        <Title> {activeItem.title} </Title>
        <Date> {activeItem.date} </Date>
        <Description> {activeItem.description} </Description>
      </ActiveItemInfo>
    </>
  );
}

const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;
  margin-top: 28px;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    `;

const ActiveItemInfo = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  margin-top: 24px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0;
  color: ${Colors.offBlack};
`;
const Date = styled.h3`
  margin-top: 16px;
  margin-left: 2px;
  font-size: 12px;
  color: ${Colors.offBlack};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${Colors.darkGrey};
  margin-bottom: 0;
`;

export default Timeline;
