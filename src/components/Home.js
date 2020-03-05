import React from 'react';
import {Link} from "react-router-dom"; 

const Home = props => {


    return (
      <div className = "homeContainer">
        <div className = "homeContent">
          <div className = "fadeDown"> 
            <h1 className = "homeName"> Dean Towheed </h1>
            <h2 className = "homeSubName"> Front end web developer</h2>
          </div>
          <div className = "fadeUp"> 
            <h2 className = "homeSubText"> Welcome to my personal portfolio. Click on one of the buttons below to get started. </h2>
            <Link to = "/about"> 
              <button> Read More </button> 
            </Link>
            <Link to = "/projects"> 
              <button> View Projects </button> 
            </Link>
          </div>
        </div>
      </div>
    );
  }


export default Home;
