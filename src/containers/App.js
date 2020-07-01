import React, { useState, useEffect } from "react";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./App.css";

function App() {
  const [item, setItem] = useState({
    movies: [],
    series: [],
    loading: true,
    error: false,
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
        movieSeriesItems.entries.map((i) => {
          if (
            i.programType === "movie" &&
            i.releaseYear >= 2010 &&
            movieBlocks.length !== 21
          ) {
            movieBlocks.push(i);
          }
          if (
            i.programType === "series" &&
            i.releaseYear >= 2010 &&
            seriesBlocks.length !== 21
          ) {
            seriesBlocks.push(i);
          }
        });
        setItem({
          movies: [...movieBlocks],
          series: [...seriesBlocks],
        });
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home movieItems={item.movies} seriesItems={item.series} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
