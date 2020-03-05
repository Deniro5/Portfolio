import React , {useEffect, useState} from 'react';
import {Link} from "react-router-dom"; 



const Header = props => {

  const [current, setCurrent] = useState("")

    useEffect(() => {
      const urlParts = window.location.href.split("/");
      let currentSection =  urlParts[urlParts.length-1];
      setCurrent(currentSection)
    }, [])


    return (
      <div className = "headerContainer">
        <Link onClick = {() => {setCurrent("")}} to = "/"> 
          <p className = {"headerItem " + (current === "" ? "selected" : "")} > Home </p> 
        </Link>
        <Link onClick = {() => {setCurrent("about")}} to = "/about">
          <p className = {"headerItem " + (current === "about" ? "selected" : "")}>  About </p> 
        </Link>
        <Link onClick = {() => {setCurrent("projects")}} to = "/projects">
          <p className = {"headerItem " + (current === "projects" ? "selected" : "")}>  Projects </p> 
        </Link>
        <Link onClick = {() => {setCurrent("contact")}} to = "/contact">
          <p className = {"headerItem " + (current === "contact" ? "selected" : "")}>  Contact </p> 
        </Link>
      </div>
    );
  }


export default Header;
