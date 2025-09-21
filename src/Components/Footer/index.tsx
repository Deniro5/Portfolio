import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>Dean Towheed © 2024. All rights reserved.</FooterContainer>
  );
}

const FooterContainer = styled.div`
  border-top: 1px solid lightgrey;
  margin-top: 48px;
  padding: 12px 4px;
  font-size: 12px;
  color: #4f4f4f;
  background: whitesmoke;
`;

export default Footer;
