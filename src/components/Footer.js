import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const urlParts = window.location.href.split("/");
    let currentSection = urlParts[urlParts.length - 1];
    setCurrent(currentSection);
  }, []);

  return (
    <div className='footerContainer'>
      <p> Dean Towheed © 2020. All rights reserved. </p>
    </div>
  );
};

export default Footer;
