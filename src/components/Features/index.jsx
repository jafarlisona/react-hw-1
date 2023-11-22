import React from "react";
import "./index.css";
import FeaturesCards from "../FeaturesCards";

const Features = () => {
  return (<section id="features">
   <div className="features-content">
   <p className="title-features">A better way to start building.</p>
    <FeaturesCards/>
   </div>
    </section>)
};

export default Features;
