import React, { useState } from "react";
import Prev from "@material-ui/icons/ChevronLeft";
import Next from "@material-ui/icons/ChevronRight";

const Slideshow = (props) => {
  const { projects } = props;
  const [curr, setCurr] = useState(0);

  const { imgsrc, title, link, description, src } = projects[curr];

  const prev = () => {
    if (curr === 0) {
      setCurr(projects.length - 1);
    } else {
      setCurr(curr - 1);
    }
  };

  const next = () => {
    if (curr === projects.length - 1) {
      setCurr(0);
    } else {
      setCurr(curr + 1);
    }
  };

  console.log(projects[curr]);
  return (
    <div>
      <div className='slideshowContainer'>
        <p onClick={prev} id='prev'>
          <Prev className='arrow' />
        </p>
        <p onClick={next} id='next'>
          <Next className='arrow' />
        </p>
        <div className='slideshowImgContainer'>
          <a href={link}>
            <img alt='Project' src={imgsrc} />
          </a>
        </div>
        <div className='slideshowTextContainer'>
          <a id='title' href={link}>
            {title}
          </a>
          <p> {description} </p>
          <p style={{ color: "white" }}>
            <b>Source Code:</b>
            <a style={{ display: "block", color: "lightgrey" }} href={src}>
              {src}
            </a>
          </p>
        </div>
      </div>
      <div id='slideBtnContainer'>
        {projects.map((project, index) => (
          <img
            onClick={() => {
              setCurr(index);
            }}
            className={"slideBtns" + (index === curr ? " selectedSlide" : "")}
            src={project.imgsrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
