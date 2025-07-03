import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem('token'),
  });

  useEffect(() => {
    if (auth.token) navigate('/home');
    else navigate('/login');
  }, [auth.token]);

  const login = (user, token) => {
    localStorage.setItem('token', token);
    setAuth({ user, token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ user: null, token: null });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

