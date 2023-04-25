import React from "react";
import "../../Styles/section.css";

const Section3 = () => {
  return (
    <section id="sec1">
      <div className="sec_box_1">
        <img
          src="./image/WhatsApp Image 2023-04-24 at 9.36.00 PM (1).jpeg"
          alt="section3"
        />
      </div>
      <div className="sec_box_2">
        <div >
          <h1>
            Watch your <br />
            progress every <br /> day
          </h1>
          <p>
            Save statistics on your achievements, words <br />
            learned, and mistakes
          </p>
          <button>Statistics</button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
