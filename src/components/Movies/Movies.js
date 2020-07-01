import React from "react";

const movies = ({ movieItems }) => {
  console.log(movieItems.length);
  return (
    <div>
      <h1>Movies Page</h1>
      {/* {movieItems.map((item) => {
        console.log(item.programType);
      })} */}
    </div>
  );
};

export default movies;
