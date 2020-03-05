import React from 'react';
import {Link} from "react-router-dom"; 

    const linkStyle = {
      color: "white",
    }

    const About = props => {

      return (
        <div className = "aboutContainer2">
            <div className = "aboutImgContainer2">
              <img alt = "portrait" src = "imgs/edited.png"/>
            </div>
              <div className = "titleContainer">
                <h1 className = "aboutName2"> Dean Towheed </h1>
                <h2 className = "aboutSubtitle2"> (Front end web developer)</h2>
              </div>
              <div className = "aboutTextContainer2"> 
              <p> Hi! My name is Dean. I was born London, England but moved to Ajax, Ontario at the tender age of 10 where it’s been home since. I’ve been programming for over 10 years and hold a Bachelor's Degree in Computer Science from the University of Toronto. It was during my undergraduate tenure that I discovered my passion for Front end web development which combines my love for programming with an interest in user experience and design. I’m motivated by the questions “Why are people here [on this site]?” and “How can we design the space such that they get what they need, how they need it?”
                  Since then I have devoted my time to developing various projects and strengthening my skills as a Front end web developer. I’ve been particularly focused on honing my understanding of HTML, CSS, Javascript, and React. When I’m not coding I’m either playing sports, spending time with family/friends or enjoying nature. 
                  </p>  
                 <p> To view recent samples of my work, feel free to browse the <Link style ={linkStyle} to = "/projects"> Projects </Link> page. If you have any questions or just want to chat about all things computer science, please contact me at deantowheed5@gmail.com. </p> 
     
              </div>       
        </div>
      );
    }


export default About;
