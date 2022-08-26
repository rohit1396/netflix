import React, { useState, useEffect } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import axios from "./axios";
import { API_KEY } from "./requests";

// const base_url = "https://image.tmdb.org/t/p/original/";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [searchMovie, setSearchMovie] = useState([]);
  const { user } = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else setShow(false);
      });
    };
  }, []);

  const handleMovie = async () => {
    const getMovie = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${input}`
    );
    console.log(getMovie);
    setSearchMovie(getMovie.data.results);
    // setInput("");
  };
  // console.log(searchMovie);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix_logo"
      />
      <div className="nav_searchBar">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Link to="/home/searchpage">
          <SearchIcon className="nav_searchButton" onClick={handleMovie} />
        </Link>
      </div>
      {user && (
        <div className="nav_user">
          <h4>{user.email}</h4>
          <h3 onClick={handleLogout}>Sign out</h3>
        </div>
      )}
    </div>
  );
};

export default Navbar;
