import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/signin");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };
  return (
    <div className="signup">
      <div className="signup_nav">
        <Link to="/">
          <img
            className="signup_navLogo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Netflix Logo"
          />
        </Link>
        <Link to="/signin" className="signup_signInButton">
          Sign In
        </Link>
      </div>
      <form onSubmit={userRegister} action="" className="signup_form">
        <h2>Create Netflix account to start Your Membership</h2>
        <h5>UserName</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signup_button">
          Sign Up
        </button>
        <p>This is One Way Process. Do remember your Credentials</p>
        <p>
          Already have an account ? <Link to="/signin">Sign In here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
