import React,{createContext, useState, useEffect} from 'react';
import Axios from "axios";
export const AuthContext=createContext();

const Authorization = ( token= null )=>{
    if(token)
    Axios.defaults.headers.common.Authorization= `Bearer ${token}`
    else
    delete Axios.defaults.headers.common.Authorization
}

const AuthContextProvider = (props) => {
    const [token,setToken] = useState(localStorage.getItem("token"));
    useEffect(()=>{
        localStorage.setItem("token",token);
        Authorization(token);
    },[token])
    return (  
        <AuthContext.Provider value={{token:token,setToken:setToken}}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;