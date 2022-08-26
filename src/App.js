import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import SearchPage from "./SearchPage";
import Signin from "./Signin";
import Signup from "./Signup";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/searchpage"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
