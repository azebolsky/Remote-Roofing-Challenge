import React from "react";
import "./Movies.css";

const movies = ({ movieItems }) => {
  console.log(movieItems.length);
  return (
    <div className="movie-container">
      {movieItems.map((item) => {
        return (
          <div className="movie">
            <img
              src={item.images["Poster Art"].url}
              alt="movie"
              height="200px"
              width="150px"
            />
            <p className="movie-title">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default movies;
