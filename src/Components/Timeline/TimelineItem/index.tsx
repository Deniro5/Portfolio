import styled from "styled-components";

type TimelineItemProps = {
  isActive: boolean;
  isPast: boolean;
  setActive: () => void;
};

function TimelineItem({ isPast, isActive, setActive }: TimelineItemProps) {
  return (
    <TimelineItemMarker
      isActive={isActive}
      isPast={isPast}
      onClick={() => setActive()}
    ></TimelineItemMarker>
  );
}

const TimelineItemMarker = styled.div<{
  isActive: boolean;
  isPast: boolean;
}>`
  background: ${({ isPast, isActive }) =>
    isPast || isActive ? "#004369" : "lightgrey"};
  width: ${({ isActive }) => (isActive ? 14 : 10)}px;
  height: ${({ isActive }) => (isActive ? 14 : 10)}px;
  border-radius: 12px;
  position: relative;

  &:hover {
    background: #004369;
    cursor: pointer;
  }

  &:not(:first-child)::before {
    content: "";
    position: absolute;
    left: -36px; /* Adjusts the starting point of the before line */
    background: ${({ isActive, isPast }) =>
      isActive || isPast ? "#004369" : "lightgrey"};
    top: 50%;
    width: 36px;
    height: 2px;
    transform: translateY(-50%);
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -36px;
    background: ${({ isPast }) => (isPast ? "#004369" : "lightgrey")};
    top: 50%;
    width: 36px;
    height: 2px;
    transform: translateY(-50%);
  }
`;

export default TimelineItem;
