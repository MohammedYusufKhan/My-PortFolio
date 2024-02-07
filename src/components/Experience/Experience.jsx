import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>200+</div>
        <span  style={{color: darkMode?'white':''}}>code</span>
        <span>Leetcode</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>25+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>15+</div>
        <span  style={{color: darkMode?'white':''}}>Trophy</span>
        <span>Sports</span>
      </div>
    </div>
  );
};

export default Experience;
