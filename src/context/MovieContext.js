import React, { createContext, useContext, useReducer } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ reducer, initialState, children }) => {
  return (
    <MovieContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </MovieContext.Provider>
  );
};

export const MovieState = () => useContext(MovieContext);
