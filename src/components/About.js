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
              <p> I was born in London, England in 1995 before relocating to Ajax, Ontario in December of 2005. I have been programming for 10 years and my passion for computers eventually led to the acquisition of a Bachelor's Degree in Computer Science from the University of Toronto. During this time I discovered my main passion which was Front end web development. Since then I have devoted much of my time to the development of various projects, in hopes of further improving my skills as a Front end web developer, in particular my understanding of HTML, CSS, Javascript and React. </p> 
              <p> Feel free to view the <Link style ={linkStyle} to = "/projects"> Projects </Link> page to view some of the work I have completed recently. For any further questions please visit the <Link style ={linkStyle} to = "/contact"> Contact </Link> page. </p>
              </div>       
        </div>
      );
    }


export default About;
