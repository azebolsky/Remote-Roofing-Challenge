import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Movies from "../components/Movies/Movies";
import Series from "../components/Series/Series";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./App.css";

const App = () => {
  const [item, setItem] = useState({
    movies: [],
    series: [],
    loading: true,
    error: false,
  });
  const [sub, setSub] = useState({
    subtitle: "Titles",
  });

  // fetch json data using useEffect with an empty array as the second arg so this only runs once
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let movieSeriesItems;
        movieSeriesItems = data;
        let movieBlocks = [];
        let seriesBlocks = [];
        movieSeriesItems.entries.forEach((i) => {
          if (i.programType === "movie" && i.releaseYear >= 2010) {
            movieBlocks.push(i);
          }
          if (i.programType === "series" && i.releaseYear >= 2010) {
            seriesBlocks.push(i);
          }
        });
        return setItem({
          movies: [...movieBlocks],
          series: [...seriesBlocks],
          loading: false,
        });
      })
      .catch((error) => {
        setItem({
          error: true,
        });
      });
  }, []);

  const handleLinkClick = (type) => {
    setSub({
      subtitle: type,
    });
  };

  return (
    <div className="App">
      <Header
        currentSubtitle={sub.subtitle}
        handleLinkClick={handleLinkClick}
      />
      {!item.loading || !item.error ? (
        <div className="content">
          <Route
            path="/movies"
            render={() => <Movies movieItems={item.movies} />}
          />
          <Route
            path="/series"
            render={() => <Series seriesItems={item.series} />}
          />
          <div className="home">
            <Link
              className="links"
              to="/series"
              onClick={() => handleLinkClick("Series")}
            >
              Series
            </Link>
            <Link
              className="links"
              to="/movies"
              onClick={() => handleLinkClick("Movies")}
            >
              Movies
            </Link>
          </div>
        </div>
      ) : (
        <h1>{item.loading ? "...loading" : "Something went wrong"}</h1>
      )}
      <Footer />
    </div>
  );
};

export default App;
