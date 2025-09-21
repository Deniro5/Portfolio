import styled from "styled-components";
import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Body>
        <Projects />
        <About />
      </Body>{" "}
      <Footer />
    </>
  );
}

const Body = styled.div`
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export default App;
