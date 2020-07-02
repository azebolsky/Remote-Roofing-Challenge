import React from "react";
import "./Series.css";

const series = ({ seriesItems }) => {
  return (
    <div className="series-container">
      {seriesItems.map((item, idx) => {
        return (
          <div className="series" key={idx}>
            <img
              src={item.images["Poster Art"].url}
              alt="series"
              height="200px"
              width="150px"
            />
            <p className="series-title">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default series;
