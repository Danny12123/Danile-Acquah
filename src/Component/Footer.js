import React from 'react';
import "../Styles/footer.css";
import { FaYoutube, FaBars} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="foot_box_1">
        <ul>
          <li>Home</li>
          <li>Textbook</li>
          <li>Statistics</li>
          <li>Sprint</li>
          <li>Audio-call</li>
        </ul>

        <ul>
          <li>Alex</li>
          <li>Gabriel</li>
          <li>Marcus</li>
        </ul>
      </div>
      <div className="foot_box_2">
        <div className="foot_icons">
            <FaYoutube />
        </div>
        <div className="foot_copy">
          <p>
            @2021 GlobalTalk, Project for <span>GlobalTalk.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
