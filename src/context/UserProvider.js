import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import CircularProgress from '@mui/material/CircularProgress';

const UserContext = React.createContext()

const UserProvider = ({children}) => {
  const [user,setUser] = useState(false)
  const [userInfo,setUserInfo] = useState({})
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName
        })
        setUser(true)
        setLoading(false)
      } else {
        // User is signed out
        // ...
        setUserInfo({})
        setUser(false)
        setLoading(false)
      }
    });
  },[])
  return (
    <UserContext.Provider value={{user,setUser,userInfo,setUserInfo,setLoading}}>
        {loading?<CircularProgress className="m-[25px]"/>:children}
    </UserContext.Provider>
  )
}

export const useUserProvider = ()=>{
    return React.useContext(UserContext);
}

export default UserProvider