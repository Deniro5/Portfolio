import styled from "styled-components";
import { Colors } from "../../../styles";

type TechBadgeProps = {
  name: string;
  imgsrc: string;
};

function TechBadge({ name, imgsrc }: TechBadgeProps) {
  return (
    <TechBadgeContainer>
      <img src={imgsrc} />
      <Name> {name} </Name>
    </TechBadgeContainer>
  );
}

const TechBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 4px;
  img {
    width: 42px;
    height: 42px;
  }
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: ${Colors.darkGrey};
`;

export default TechBadge;
