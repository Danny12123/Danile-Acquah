import React, {useState} from 'react';
import { FaBars} from "react-icons/fa";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const isActiveHandler = () => {
        setIsActive(!isActive)
    }
  return (
    <div id="nav">
      <nav>
        <div className="nav_box_1">
          <div className="logo">
            <h1>GlobalTalk</h1>
          </div>
          <ul>
            <li>Home</li>
            <li>Textbook</li>
            <li>Statistics</li>
            <li>Games</li>
          </ul>
          <div className="bar" onClick={isActiveHandler}>
           <FaBars />
          </div>
        </div>
        <div className="sm_logo">
          <h1>GlobalTalk</h1>
        </div>
        <div className="nav_box_2">
          <div className="user">
            <h2>A</h2>
          </div>
          <h5>Alex</h5>
          <h1>Sign Out</h1>
        </div>
      </nav>
      <div className={isActive ?  "sm_nav" :"sm_nav_disactive"}>
       
          <div className="sm_nav_head">
            <h1 onClick={isActiveHandler}>X</h1>
            <h2>GlobalTalk</h2>
            <div className="nav_box_2">
              <div className="user">
                <h2>A</h2>
              </div>
              <h5>Alex</h5>
            </div>
          </div>
          <div className="sm_link">
            <ul>
              <li className="active">Main</li>
              <li>Textbook</li>
              <li>Statistics</li>
              <li>Sprint</li>
              <li>Audio-call</li>
            </ul>
          </div>
        
      </div>
    </div>
  );
}

export default Nav
