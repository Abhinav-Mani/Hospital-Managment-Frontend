import React, { useContext } from 'react';

import {Switch,Route,Redirect} from "react-router-dom";
import Home from '../Home';
import SignInPage from "../../Components/Form/SignInPage";
import SignUpPage from "../../Components/Form/SignUpPage"
import { AuthContext } from '../../context/AuthContextProvider';
import jwtdecode from "jwt-decode";

const Router = () => {
    const {token}=useContext(AuthContext);
    return ( 
    <>
    {token?<Redirect to={`/${jwtdecode(token).post.toLowerCase()}`}/>:console.log("No token")}
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
    </>
     );
}
 
export default Router;