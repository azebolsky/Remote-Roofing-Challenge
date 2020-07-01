import React from "react";
import Movies from "../Movies/Movies";
import Series from "../Series/Series";

const home = ({ movieItems }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Movies movieItems={movieItems} />
      <Series />
    </div>
  );
};

export default home;
