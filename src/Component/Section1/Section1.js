import React from 'react';
import "../../Styles/section.css";

const Section1 = () => {
  return (
    <section id="sec1">
      <div className="sec_box_1">
        <img
          src="./image/WhatsApp Image 2023-04-24 at 9.36.01 PM.jpeg"
          alt="section1"
        />
      </div>
      <div className="sec_box_2">
        <div>
          <h1>
            Learning a language <br />
            in a playful way
          </h1>
          <p>Make learning words more fun with mini-games</p>
        </div>
      </div>
    </section>
  );
}

export default Section1
