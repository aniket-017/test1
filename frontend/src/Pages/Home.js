// Home.js
import React from "react";
import Typist from "react-typist";
import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AboutUs from "./AboutUs";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Innovation", "Technology", " Collaboration"],
    loop: {},
  });

  return (
    <div>
      <div className="row">
        <div className="col col1">
        &nbsp;&nbsp;"Mastering the art of IT solutions, Zealits meticulously orchestrates{" "}
          <span className="three">{text}</span>
          <Cursor /> <br/> ensuring unparalleled customer satisfaction and fostering unwavering client loyalty for an elevated
          digital experience."
        </div>
        <div className="col col2"></div>
      </div>
   
  
    </div>
  );
};

export default Home;
