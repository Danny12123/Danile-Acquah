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
          <div className="ic_box">
            <div className="sp">
              <p>Sprint</p>
              {/* <img src="./image/VVIP7754.JPG" alt="" /> */}
            </div>
            <div className="au">
              <p>Audio-call</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1
