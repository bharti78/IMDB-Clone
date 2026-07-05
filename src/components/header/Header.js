import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://images.apifyusercontent.com/2VzvjVvStorTfyEz7GrK2sLJxlJs8m_E6aULJfSEj4Q/rs:fill:250:250/cb:1/aHR0cHM6Ly9hcGlmeS1pbWFnZS11cGxvYWRzLXByb2QuczMuYW1hem9uYXdzLmNvbS9wb1d1WVBtYmZMR0JuNU1mOC9vRTlvU2V5YzdoZXFhWEVidC1pbWRiLnBuZw.webp"
            alt="IMDB Logo"
          />
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`headerRight ${isMenuOpen ? "showMenu" : ""}`}>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
