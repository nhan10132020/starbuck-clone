import React from 'react'
import FooterSecondary from '../components/FooterSecondary'
import { Link } from 'react-router-dom'
import SignupForm from '../components/SignupForm'

const SignUp = () => {
  return (
    <div className="grid place-items-center gap-[40px] sx:gap-[30px]">
      <div className="shadow-header-shadow w-full h-[101px] flex items-center">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
            className='object-contain h-[50px] mx-[40px]'
          />
        </Link>
      </div>
      <h1 className="text-3xl text-[rgba(0,0,0,0.87)] font-[800] sx:mr-auto sx:px-[20px] sx:text-2xl">Create an account</h1>
      <div className="text-center sx:text-left sx:px-[20px]">
        <h4 className='text-[rgba(0,0,0,0.56)] leading-[1.4px] font-[800] text-[14px] mb-[20px] sx:none'>STARBUCKS® REWARDS</h4>
        <p className='text-[rgba(0,0,0,0.56)] leading-[1.5] max-w-[500px] font-[600] text-[14px] sx:text-[13px]'>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <Link className='text-[rgba(0,0,0,0.56)] underline hover:no-underline'>more</Link>.
        </p>
      </div>
      <SignupForm />
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
  )
}

export default SignUp