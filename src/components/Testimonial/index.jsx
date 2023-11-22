import React from "react";
import "./index.css";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <p>
          "Working with Start Bootstrap templates has saved me tons of
          development time when building new projects! Starting with a Bootstrap
          template just makes things easier!"
        </p>
        <div className="testimonial-author">
          <div className="testimonial-img">
            <img src="https://dummyimage.com/40x40/ced4da/6c757d" alt="profile" style={{borderRadius:"50%"}}/>
          </div>
          <p>Tom Ato <span style={{color:"#0D6EFD"}}>/</span> CEO, Pomodoro</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
