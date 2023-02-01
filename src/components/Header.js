import React from 'react'
import { Link } from 'react-router-dom'
import Example from '../components/Menu/Example'
import FindStore from './FindStore'
import {useUserProvider } from '../context/UserProvider'
import SigninButton from './SigninButton'
import SignupButton from './SignupButton'
import LogoutButton from './LogoutButton'
import User from './User'
const Header = ({menuPage}) => {
    const {user,userInfo} = useUserProvider() 
  
  return (
    <div className ={`h-[101px] flex items-center justify-between px-[40px] shadow-header-shadow z-[2] bg-white ${menuPage && 'fixed top-0 left-0  w-full sm:inherit'}`}>
        <div className='flex items-center gap-[20px]'>
            <Link className='mr-[20px]' to="/">
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' alt="" className="object-contain h-[50px]"/>
            </Link>

            <Link to='/menu' className='text-black font-[800] tracking-[1.4px] opacity-[0.87] text-[14px] uppercase hover:text-[#008248] hover:transition-all hover:duration-[0.1s] sm:hidden'>
                Menu
            </Link>

            <Link to="" className='text-black font-[800] tracking-[1.4px] opacity-[0.87] text-[14px] uppercase hover:text-[#008248] hover:transition-all hover:duration-[0.1s] sm:hidden'>
                Rewards
            </Link>

            <Link to="" className='text-black font-[800] tracking-[1.4px] opacity-[0.87] text-[14px] uppercase hover:text-[#008248] hover:transition-all hover:duration-[0.1s] sm:hidden'> 
                Gift Cards 
            </Link>
        </div>

        <div className='flex items-center gap-[20px]'>
            <Example/>
            <FindStore hiddenOnMd />
            {menuPage&&user&&<User hiddenOnMd info={userInfo.displayName}/>}
            {!user?(
            <>
            <span to="/account/signin" className='sm:hidden'>
                <SigninButton/>
            </span>
            <span to="/account/create"  className='sm:hidden'>
                <SignupButton/>
            </span>
            </>
            ):(
            <div className='sm:hidden'>
                {menuPage?<LogoutButton/>:<Link to="/menu" className='sm:hidden text-black font-[800] tracking-[1.4px] opacity-[0.7] uppercase text-[14px] hover:text-[#008248] hover:transition-all hover:duration-100'>Order Now </Link>}
            </div>
            )   
            }
        </div>
    </div>
  )
}

export default Header