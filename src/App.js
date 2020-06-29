import React from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "./Components/Home"
import './StyleSheet/app.scss'

import NavBar from "./Components/Navabar/NavBar"
import SignInPage from './Components/Form/SignInPage';
import SignUpPage from './Components/Form/SignUpPage';
import AuthContextProvider from './context/AuthContextProvider';
function App() {
  return (
    <div className="app">
    <AuthContextProvider>
    <NavBar/>
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/signIn" >
          <SignInPage/>
      </Route>
      <Route path="/signUp" >
          <SignUpPage/>
      </Route>
    </Switch>
    </AuthContextProvider>
    </div>
  );
}

export default App;
