import { useEffect, useState } from "react";
import styled from "styled-components";

function Header() {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    setIsAtTop(window.scrollY <= 60);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) {
      //set the destination point to be 30px above the section title
      const yOffset = -30;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer isAtTop={isAtTop}>
      <HeaderLink onClick={() => handleScrollToSection("home")}>Top</HeaderLink>
      <HeaderLink onClick={() => handleScrollToSection("about")}>
        About
      </HeaderLink>
      <HeaderLink onClick={() => handleScrollToSection("projects")}>
        Projects
      </HeaderLink>
    </HeaderContainer>
  );
}

const HeaderLink = styled.button`
  font-size: 16px;
  padding: 4px 16px;
  margin: 0 8px;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: 600;
  
`;

const HeaderContainer = styled.div<{ isAtTop: boolean }>`
  background: ${({ isAtTop }) => (isAtTop ? "rgba(0, 0, 0, 0)" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  ${HeaderLink} {
    color: ${({ isAtTop }) => (isAtTop ? "white" : "black")};
    &:hover {
      color: ${({ isAtTop }) => (isAtTop ? "lightgrey" : "#004369")};
    }
  }
`;

export default Header;
