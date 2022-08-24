import React from "react";
import axios from "./axios";
import Navbar from "./Navbar";
import "./SearchPage.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const SearchPage = ({ title, img }) => {
  return (
    <div className="searchpage">
      <Navbar />
    </div>
  );
};

export default SearchPage;
