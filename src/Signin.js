import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };
  return (
    <div className="signin">
      <form onSubmit={userLogin} className="signin_form">
        <h1>Sign In</h1>
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
        <button type="submit" className="signin_button">
          Sign In
        </button>
        <p>
          New to Netflix ? <Link to="/signup">Sign Up Now</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
