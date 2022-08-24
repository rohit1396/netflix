// set up data layer
//  need to track the data

import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

// This is the data layer
export const StateContext = createContext();

// This is data Provider
export const StateProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userData = localStorage.getItem("list");
    return userData ? JSON.parse(localStorage.getItem("list")) : [];
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(user));
  }, [user]);

  // console.log(user);

  return (
    <StateContext.Provider value={{ user }}>{children}</StateContext.Provider>
  );
};

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
