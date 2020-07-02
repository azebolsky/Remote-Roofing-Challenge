import React from "react";
import "./Movies.css";

const movies = ({ movieItems }) => {
  const collator = new Intl.Collator("en", {
    numeric: true,
    sensitivity: "base",
  });

  const newMovieItems = movieItems.sort((a, b) =>
    collator.compare(a.title, b.title)
  );

  return (
    <div className="movie-container">
      {newMovieItems.slice(0, 21).map((item, idx) => {
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
