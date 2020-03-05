import React from 'react';


const Project = props => {

    const {imgsrc, title, description} = props;

    return (
      <div className = "projectContainer">
        <div className = "projectImgContainer">
          <img alt = "Project" src = {imgsrc} />
        </div>
        <div className = "projectTextContainer">
          <h2> {title} </h2> 
          <p> {description} </p>
        </div>

      </div>
    );
  }


export default Project;
