import React from 'react'
import { Link } from 'react-router-dom'
const SigninButton = () => {
  return (
   <Link className='inline-block border-[1px] border-black rounded-[50px] py-[7px] px-4 font-[700] leading-[1.2] text-center cursor-pointer transition-all duration-200 text-[rgba(0,0,0,0.87)] text-[14px] hover:bg-[rgba(0,0,0,0.06)]' to="account/signin">
    Sign in
   </Link>
  )
}

export default SigninButton