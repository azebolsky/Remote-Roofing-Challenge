import React from "react";
import Movies from "../Movies/Movies";
import Series from "../Series/Series";

const home = (props) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Movies />
      <Series />
    </div>
  );
};

export default home;
