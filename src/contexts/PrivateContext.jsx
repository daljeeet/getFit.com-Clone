import React from 'react'
import { useContext } from 'react'
import { userAuth } from './ContextProvider'
import Login from '../pages/auth_pages/Login'
const PrivateContext = ({children}) => {
  const {isAuth} = useContext(userAuth)
if(isAuth==false){
    return <Login/>
}
return children
}

export default PrivateContext