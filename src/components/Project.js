import React from "react";

const Project = (props) => {
  const { link, src, imgsrc, title, description } = props;

  return (
    <div className='projectContainer'>
      <div className='projectImgContainer'>
        <a href={link}>
          <img alt='Project' src={imgsrc} />
        </a>
      </div>
      <div className='projectTextContainer'>
        <a id='title' href={link} />
        <p> {description}</p>

        <p style={{ color: "white" }}>
          <b>Demo:</b>
          <a style={{ display: "block", color: "lightgrey" }} href={link}>
            {link}
          </a>
        </p>
        <p style={{ color: "white" }}>
          <b>Source Code:</b>
          <a style={{ display: "block", color: "lightgrey" }} href={src}>
            {src}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
