import React from 'react';

import {Switch,Route} from "react-router-dom";
import Home from '../Home';
import SignInPage from "../../Components/Form/SignInPage";
import SignUpPage from "../../Components/Form/SignUpPage"

const UnAuthorisedRoutes = () => {
    return ( 
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
    );
}
 
export default UnAuthorisedRoutes;