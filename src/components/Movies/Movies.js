import React from "react";
import "./Movies.css";

const movies = ({ movieItems }) => {
  console.log(movieItems.length);
  return (
    <div className="movie-container">
      {movieItems.map((item, idx) => {
        return (
          <div className="movie" key={idx}>
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
