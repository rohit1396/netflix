import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import { MovieState } from "./context/MovieContext";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [{ continueWatching }, dispatch] = MovieState();

  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
    };
    getMovies();
  }, [fetchUrl]);
  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.original_title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));

      dispatch({
        type: "ADD_TO_CONTINUEWATCH",
        item: {
          id: movie.id,
          title: movie.title,
          img1: movie.backdrop_path,
          img2: movie.poster_path,
        },
      });
    }
  };

  console.log(continueWatching);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleMovie(movie)}
              key={movie.id}
              className={`row_poster ${isLarge && "row_posterLarge"}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title || movie.original_title}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
