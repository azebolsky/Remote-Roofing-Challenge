import React from "react";
import { Route, Link } from "react-router-dom";
import Movies from "../Movies/Movies";
import Series from "../Series/Series";
import "./Home.css";

const home = ({ movieItems, seriesItems }) => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <Link to="/series">Series</Link>
      <Link to="/movies">Movies</Link>
      <Route
        exact
        path="/movies"
        render={() => <Movies movieItems={movieItems} />}
      />
      <Route
        exact
        path="/series"
        render={() => <Series seriesItems={seriesItems} />}
      />
    </div>
  );
};

export default home;
