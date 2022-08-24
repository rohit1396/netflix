import React from "react";
import "./ContinueWatch.css";
import { MovieState } from "../context/MovieContext";

const base_url = "https://image.tmdb.org/t/p/original/";

const ContinueWatch = () => {
  const [{ continueWatching }] = MovieState();
  return (
    <div className="continuewatch_row">
      {continueWatching?.length > 0 && <h1>Continue Watching</h1>}
      <div className="continuewatch_rowPosters">
        {continueWatching.map((movie) => (
          <img
            key={movie.id}
            className="continuewatch_rowPoster"
            src={`${base_url}${movie.img1}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinueWatch;
