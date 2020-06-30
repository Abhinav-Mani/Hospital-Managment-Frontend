import React, { useContext } from 'react';

import {Redirect} from "react-router-dom";
import { AuthContext } from '../../context/AuthContextProvider';
import jwtdecode from "jwt-decode";
import UnAuthorisedRoutes from './UnAuthorisedRoutes';
import AuthorisedRoutes from './AuthorisedRoutes';

const Router = () => {
    const {token}=useContext(AuthContext);
    return ( 
    <>
    {token?<Redirect to={`/${jwtdecode(token).post.toLowerCase()}`}/>:<Redirect to={`/signIn`}/>}
    {!token&&<UnAuthorisedRoutes/>}
    {token&&<AuthorisedRoutes/>}
    </>
    );
}
 
export default Router;