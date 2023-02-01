import React from 'react'
import { Link } from 'react-router-dom'
const SignupButton = () => {
  return (
    <Link className='inline-block border-[1px] border-black rounded-[50px] py-[7px] px-4 font-[700] leading-[1.2] text-center transition-all duration-200 cursor-pointer bg-black text-white text-[14px] hover:bg-[rgba(0,0,0,0.7)] hover:border-[rgba(0,0,0,0.7)]' to="/account/create">
      Join now
    </Link>
  )
}

export default SignupButton