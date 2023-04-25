import React from "react";
import "../../Styles/section.css";

const Section2 = () => {
  return (
    <section id="sec2">
      <div className="sec_box_2">
        <div>
          <h1>
            Increase your <br />
            vocabulary
          </h1>
          <p>
            Traditional and new effective approaches to <br />
            word study
          </p>
          <button>Textbook</button>
        </div>
      </div>
      <div className="sec_box_1">
        <img
          src="./image/WhatsApp Image 2023-04-24 at 9.35.59 PM.jpeg"
          alt="section2"
        />
      </div>
    </section>
  );
};

export default Section2;
