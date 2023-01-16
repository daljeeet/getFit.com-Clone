import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

 export const userAuth = createContext();
const ContextProvider = ({children}) => {
const [isAuth, setIsAuth] = useState(false);
const [token, setToken] =useState(null);
useEffect(() => {
   let tkn= localStorage.getItem("token");
   setToken(tkn)
   if(token){
    setIsAuth(true)
   }else{
    setIsAuth(false)
   }
}, [token])
const userLogin = (data)=>{
    if(data){
        setToken(data)
        setIsAuth(true)
        localStorage.setItem("token",data.access_token)
    }
}
const userLogout= ()=>{
    localStorage.setItem("token",null);
    setIsAuth(false)
}

return (
<userAuth.Provider value={{token, isAuth, userLogin, userLogout}} >
    {children}
</userAuth.Provider>
)

}

export default ContextProvider