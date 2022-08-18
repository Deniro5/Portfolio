import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "white",
};

const skills = [
  { name: "HTML", img: "imgs/html.png" },
  { name: "CSS/SASS", img: "imgs/css.png" },
  { name: "Typescript", img: "imgs/typescript.png" },
  { name: "React", img: "imgs/react.png" },
  { name: "Redux", img: "imgs/redux.png" },
  { name: "Node.js", img: "imgs/node.png" },
  { name: "Git", img: "imgs/git.png" },
  { name: "ES6", img: "imgs/es6.png" },
];

const About = (props) => {
  return (
    <div className='aboutContainer2'>
      <div className='aboutImgContainer2'>
        <img alt='portrait' src='imgs/edited.jpg' />
      </div>
      <div className='titleContainer'>
        <h1 className='aboutName2'> Dean Towheed </h1>
        <h2 className='aboutSubtitle2'> (Front End Developer)</h2>
      </div>
      <div className='aboutTextContainer2'>
        <h1
          style={{ fontSize: "28px", marginBottom: "20px", color: "white" }}
          className='aboutName2'>
          Who am I?
        </h1>
        <div className='showcaseDivider' />
        <p>
          Hi! My name is Dean. I was born London, England but moved to Ajax, Ontario at
          the age of 10 where it’s been home since. I’ve been programming for over 10
          years and hold a Bachelor's Degree in Computer Science from the University of
          Toronto. It was during my undergraduate tenure that I discovered my love for
          front end development which allows me to pursue my dream of creating high
          quality applications that can benefit a variety of different users. Since then I
          have devoted my time to developing various projects and strengthening my skills
          as a Front End Developer. When I’m not coding, I’m either playing sports,
          spending time with family or enjoying nature.
        </p>
        <p>
          {" "}
          To view recent samples of my work, feel free to browse the{" "}
          <Link style={linkStyle} to='/projects'>
            {" "}
            Projects{" "}
          </Link>{" "}
          page. If you have any questions or just want to chat about all things computer
          science, please contact me at deantowheed5@gmail.com.{" "}
        </p>
      </div>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }} className='aboutName2'>
        Main Skills
      </h1>
      <div className='showcaseDivider' />
      <div className='skillContainer'>
        {skills.map((skill) => (
          <div className='skill'>
            <img alt={"icon"} src={skill.img} />
            <p> {skill.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
