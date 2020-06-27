import React from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "./Components/Home"
import './StyleSheet/app.scss'

import NavBar from "./Components/NavBar"
import SignInPage from './Components/Form/SignInPage';
import SignUpPage from './Components/Form/SignUpPage';
function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
