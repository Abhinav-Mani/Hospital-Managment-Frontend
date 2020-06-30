import React,{createContext, useState, useEffect} from 'react';

export const AuthContext=createContext();

const AuthContextProvider = (props) => {
    const [token,setToken] = useState(localStorage.getItem("token"));
    useEffect(()=>{
        localStorage.setItem("token",token);
    },[token])
    return (  
        <AuthContext.Provider value={{token:token,setToken:setToken}}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;