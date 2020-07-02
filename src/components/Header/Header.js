import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const header = (props) => {
  return (
    <div>
      <nav className="nav">
        <Link to="/" onClick={() => props.handleLinkClick("Titles")}>
          <h1>DEMO Streaming</h1>
        </Link>
        <div className="right-nav">
          <Link to="/">Log in</Link>
          <Link to="/" className="free-trial">
            Start your free trial
          </Link>
        </div>
      </nav>
      <nav className="sub-nav">
        <h1>Popular {props.currentSubtitle}</h1>
      </nav>
    </div>
  );
};

export default header;
