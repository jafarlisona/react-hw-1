import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShownPortfolio, setIsShownPortfolio] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const handleClickPortfolio = (event) => {
    setIsShownPortfolio((current) => !current);
  };
  const blogSelectStyle = {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "7px",
    width: "150px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    top: "60px",
  };
  const portfolioSelectStyle = {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "7px",
    width: "170px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    top: "60px",
  };
  return (
    <>
      <nav>
        <div className="navbar">
          <h1>Start Bootstrap</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <span onClick={handleClick}>
                Blog <FontAwesomeIcon icon={faSortDown} className="iconStyle" />
              </span>
              {isShown && (
                <div style={blogSelectStyle}>
                  <a href="#">Blog Home</a>
                  <a href="#">Blog Post</a>
                </div>
              )}
            </li>
            <li>
              <span onClick={handleClickPortfolio}>
                Portfolio <FontAwesomeIcon icon={faSortDown} className="iconStyle" />
              </span>
              {isShownPortfolio && (
                <div style={portfolioSelectStyle}>
                  <a href="#">Portfolio Overview</a>
                  <a href="#">Portfolio Item</a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
