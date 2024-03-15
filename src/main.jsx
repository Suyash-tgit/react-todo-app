import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createContext } from 'react';

export const server = "https://nodejs-todoapp-ilky.onrender.com/api/v1";

export const Context = createContext({isAuthenticated: false});

const AppWrapper = () => {   //created to use isAuthenticated value anywhere and we can change the value also
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{
      isAuthenticated,
      setAuthenticated,
      loading,
      setLoading,
      user,
      setUser
    }}>
    <App />
    </Context.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
