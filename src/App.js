import React from 'react';

import './StyleSheet/app.scss'

import NavBar from "./Components/Navabar/NavBar"

import AuthContextProvider from './context/AuthContextProvider';
import Router from './Components/Router/Router';
function App() {
  return (
    <div className="app">
    <AuthContextProvider>
      <NavBar/>
      <Router/>
    </AuthContextProvider>
    </div>
  );
}

export default App;
