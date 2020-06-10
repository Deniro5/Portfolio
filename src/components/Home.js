import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className='homeContainer'>
      <div className='homeContent'>
        <div className='fadeDown'>
          <h1 className='homeName'> Dean Towheed </h1>
          <h2 className='homeSubName'> Full Stack Developer</h2>
        </div>
        <div className='fadeUp'>
          <h2 className='homeSubText'>
            {" "}
            Hello and welcome to my personal portfolio. Click on one of the buttons below
            to get started or navigate using the header at the top of the page.{" "}
          </h2>
          <Link to='/about'>
            <button
              onClick={() => {
                props.setCurrent("about");
              }}>
              Read More
            </button>
          </Link>
          <Link to='/projects'>
            <button
              onClick={() => {
                props.setCurrent("projects");
              }}>
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
