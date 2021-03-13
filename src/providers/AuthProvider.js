import React, { useState, createContext, useEffect, useCallback } from "react";
import { willExpireToken } from "../api/auth";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [reload, setReload] = useState(false);

  const login = token => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", jwtDecode(token).id);
    setIsAuth(token);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuth(null);
  };

  const watchLocalStorage = useCallback(() => {
    window.addEventListener("storage", () => {
      const token = localStorage.getItem("token");
      if (!token) {
        logOut();
      }
    });
  }, []);

  const verifyLogin = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (willExpireToken(token)) {
        logOut();
      } else {
        login(token);
      }
    } else {
      logOut();
    }
  }, []);

  useEffect(() => {
    verifyLogin();
    watchLocalStorage();
    setReload(false);
  }, [reload, setReload, verifyLogin, watchLocalStorage]);

  return (
    <AuthContext.Provider value={{ isAuth, login, logOut, setReload }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
