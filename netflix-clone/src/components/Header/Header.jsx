import React from "react";
import "./header.css";
import Nlogo from "../../assets/images/Nlogo.png"

const Header = () => {
  return (
    <div>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li> <img src={Nlogo} alt="Netflix Logo" width = "100"/></li>
              <li>Home</li>
              <li>TvShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
        <div className= "header_right"> 
        <ul>
            {/* <li><searchI</li> */}
            <li></li>
            <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
