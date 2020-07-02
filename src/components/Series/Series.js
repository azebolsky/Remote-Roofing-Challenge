import React from "react";
import "./Series.css";

const series = ({ seriesItems }) => {
  const collator = new Intl.Collator("en", {
    numeric: true,
    sensitivity: "base",
  });

  const newSeriesItems = seriesItems.sort((a, b) =>
    collator.compare(a.title, b.title)
  );

  return (
    <div className="series-container">
      {newSeriesItems.slice(0, 21).map((item, idx) => {
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
