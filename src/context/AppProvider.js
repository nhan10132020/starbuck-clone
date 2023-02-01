import React, { useEffect, useState } from 'react'
import {collection,query,getDocs,where } from "firebase/firestore"; 
import {db} from '../firebase'
import {useUserProvider} from "../context/UserProvider"
const AppContext = React.createContext()
const AppProvider = ({children}) => {
  const {userInfo,user} = useUserProvider()
  const [itemFavourite,setItemFavourite] = useState([])
  useEffect(()=>{
    const queryData = async()=>{
        const element = [];
        const q =query(collection(db,"favourites"),where("userUid","==",userInfo.uid))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(snap=>{
           element.push(snap.data())
        })
        setItemFavourite(element)
    }
    queryData();
  },[user])
  return (
    <AppContext.Provider value={{setItemFavourite,itemFavourite}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppProvider = ()=>{
    return React.useContext(AppContext);
}

export default AppProvider