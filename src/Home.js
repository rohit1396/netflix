import React from "react";
import Banner from "./Banner";
import ContinueWatch from "./components/ContinueWatch";
import { MovieState } from "./context/MovieContext";
import "./Home.css";
import Navbar from "./Navbar";
import requests from "./requests";
import Row from "./Row";

const Home = () => {
  const [{ continueWatching }] = MovieState();
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixoriginals}
        isLarge={true}
      />
      <ContinueWatch />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default Home;
