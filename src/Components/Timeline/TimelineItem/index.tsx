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
      onClick={setActive}
      aria-pressed={isActive} // accessibility: conveys toggle state
    />
  );
}

const TimelineItemMarker = styled.button<{
  isActive: boolean;
  isPast: boolean;
}>`
  all: unset; /* reset default button styles */
  display: inline-block;

  background: ${({ isPast, isActive }) =>
    isPast || isActive ? "#004369" : "lightgrey"};
  width: ${({ isActive }) => (isActive ? 14 : 10)}px;
  height: ${({ isActive }) => (isActive ? 14 : 10)}px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;

  &:hover {
    background: #004369;
  }

  &:not(:first-child)::before {
    content: "";
    position: absolute;
    left: -36px;
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

  &:focus-visible {
    outline: 2px solid #004369; /* keyboard focus visible */
    outline-offset: 2px;
  }
`;

export default TimelineItem;
