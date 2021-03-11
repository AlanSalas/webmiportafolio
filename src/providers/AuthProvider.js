import React, { useState, createContext, useEffect, useCallback } from "react";
import { willExpireToken } from "../api/auth";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  const login = token => {
    setIsAuth(token);
    setUser(jwtDecode(token));
    localStorage.setItem("token", token);
  };

  const logOut = () => {
    setIsAuth(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const watchLocalStorage = useCallback(() => {
    window.addEventListener("storage", () => {
      if (!isAuth) {
        logOut();
      }
    });
  }, [isAuth]);

  const verifyLogin = useCallback(() => {
    if (isAuth) {
      if (willExpireToken(isAuth)) {
        logOut();
      } else {
        setIsAuth(isAuth);
        setUser(user);
      }
    } else {
      logOut();
    }
  }, [isAuth, user]);

  useEffect(() => {
    verifyLogin();
    watchLocalStorage();
  }, [isAuth, verifyLogin, watchLocalStorage]);

  return (
    <AuthContext.Provider value={{ isAuth, user, login, logOut }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
