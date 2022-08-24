import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      className="welcome"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(0deg, transparent, rgba(37, 37, 37, 0.61), #111 ) , url("https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/4f46d201-48d4-40a7-9bfb-8e260d680912/IN-en-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="welcome_nav">
        <Link to="/">
          <img
            className="welcome_navlogo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Netflix Logo"
          />
        </Link>
        <Link to="/signin" className="welcome_signInButton">
          Sign In
        </Link>
      </div>
      <div className="welcome_content">
        <h1>Unlimited movies, TV shows and many more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <h3>Ready to watch? Click on below button to create your membership</h3>
        <Link to="/signup" className="welcome_startButton">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
