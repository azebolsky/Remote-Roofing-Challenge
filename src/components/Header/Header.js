import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const header = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/">DEMO Streaming</Link>
        <div>
          {/* <a href="#">Log in</a>
          <a href="#" className="free-trial">
            {" "}
            Start your free trial
          </a> */}
        </div>
      </nav>
      <nav className="sub-nav">
        <h1>Popular Titles</h1>
      </nav>
    </div>
  );
};

export default header;
