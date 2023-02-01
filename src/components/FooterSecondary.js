import React from 'react'
import FindStore from './FindStore'
import { Link } from 'react-router-dom'
const FooterSecondary = ({alignItems,paddingLeft,flexDirection}) => {
  return (
    <div
      className='border-t-[1px] border-[rgba(0,0,0,0.1)] w-[100%] p-[30px] pb-[60px] flex flex-col sx:flex-row sx:ml-[20px]'
      style={{ alignItems, paddingLeft: `${paddingLeft * 2}px` }}
    >
      <div
        className='flex flex-col gap-[30px] sx:pl-[20px]'
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        <div className='flex flex-wrap gap-[50px] sx:gap-[30px] sx:flex-col'>
          <div className='footerSecondary__left text-[18px]'>
            <FindStore />
          </div>
          <div className='flex gap-[15px] text-[rgba(0,0,0,0.87)] font-[600] sx:text-[14px]' style={{ flexDirection }}>
            <Link>Responsibility</Link>
            <Link>Web Accessibility</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Use </Link>
            <Link>Cookie Preferences</Link>
          </div>
        </div>
        <span className='font-[600] sx:text-[14px]'>© 2021 Starbucks</span>
      </div>
    </div>
  )
}

export default FooterSecondary