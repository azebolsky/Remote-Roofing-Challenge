import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Movies from "../components/Movies/Movies";
import Series from "../components/Series/Series";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
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
        });
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Home movieItems={item.movies} seriesItems={item.series} />
      <Switch>
        <Route
          path="/movies"
          render={() => <Movies movieItems={item.movies} />}
        />
        <Route
          path="/series"
          render={() => <Series seriesItems={item.series} />}
        />
      </Switch>
      <div className="home">
        <Link className="links" to="/series">
          Series
        </Link>
        <Link className="links" to="/movies">
          Movies
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default App;
