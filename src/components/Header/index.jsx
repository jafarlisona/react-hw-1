import React from "react";
import Navbar from "../Navbar";
import "./index.css";

const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="header-content">
        <div className="text">
          <h1>A Bootstrap 5 template for modern businesses</h1>
          <p>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit!
          </p>
          <div className="buttons">
            <a href="#features" id="startBtn">Get Started</a>
            <a href="#" id="learnBtn" style={{border:'1px solid white'}}>Learn More</a>
          </div>
        </div>
        <div className="image">
          <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
