import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import  {useUserProvider} from '../context/UserProvider' 
const LogoutButton = () => {
  const {setLoading} = useUserProvider()
  const handleSignOut =()=>{
    setLoading(true)
    signOut(auth)
     .then(() => {
      // Sign-out successful.
     })
     .catch((error) => {
      // An error happened.
     });
  }

  return (
    <button className='inline-block border-[1px] border-black rounded-[50px] py-[7px] px-[16px] font-[700] leading-[1.2] text-center transition-all duration-200 ease-linear pointer hover:bg-[rgba(0,0,0,0.06)]' onClick={handleSignOut}>
      Log Out
    </button>
  )
}

export default LogoutButton