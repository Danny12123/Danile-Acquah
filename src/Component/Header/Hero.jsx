import React from 'react'

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero_box_1">
        <div className="box_1_holder">
          <h6>E-COURSE PLATFORM</h6>
          <h1>
            Learning and <br /> teaching online, <br /> made easy.
          </h1>
          <p>
            Practice your English and learn new things <br />
            with the platform
          </p>
          <button>About platform</button>

          <div className="box_num">
            <div className="pop_words">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="./image/DUTC3478.JPG" alt="" width="30" />
                <h1>
                  300
                  <span style={{ color: "#2B788B", fontWeight: "800" }}>+</span>
                </h1>
              </div>
              <p>Popular words</p>
            </div>
            <div className="mini_games">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="./image/LDCU6291.JPG" alt="" width="30" />
                <h1>
                  2
                  <span style={{ color: "#2B788B", fontWeight: "800" }}>+</span>
                </h1>
              </div>
              <p>Mini-games</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_box_2">
        <img
          src="./image/WhatsApp Image 2023-04-24 at 9.36.00 PM.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero
