import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div className="footer">
      <ul>
        <li className="home-item">Home</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Collection Statement</li>
        <li>Help</li>
        <li>Manage Account</li>
      </ul>
      <div>
        <p>Copyright &#169; 2020 Adam Zebolsky All Rights Reserved</p>
      </div>
      <ul>
        <li className="social-icons">
          <a
            href="https://www.facebook.com/adam.zebolsky/"
            className="fa fa-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>facebook link</span>
          </a>
        </li>
        <li className="social-icons">
          <a
            className="fa fa-twitter"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>twitter link</span>
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/AdamZebolsky"
            className="fa fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>instagram link</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
