import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = token => {
    localStorage.setItem("token", token);
    setIsAuth(true);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  // useEffect(() => {
  //   checkUserLogin();
  // }, []);

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logOut }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
