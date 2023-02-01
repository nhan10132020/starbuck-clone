import React from 'react'
import { Link } from 'react-router-dom'

function Info({
  image,
  title,
  info,
  link,
  background,
  color,
  path,
  classify,
}) {
  return (
    <div
      className='flex w-[49%] gap-[20px] flex-col justify-center items-center pb-[10px] relative md:w-[48%] md:px-[7px] sm:w-[100%]'
      style={{
        color,
        background,
      }}
    >
      <img src={image} alt='' className='object-contain max-w-[100%] ' />
      <div className='py-[30px] px-[60px] text-center flex flex-col gap-[20px] sx:px-[25px]'>
        <h4 className='text-[22px] font-[600] leading-[1.6] sx:text-[20px]'>{title}</h4>
        <h6 className='text-[17px] font-[600] leading-[1.6] sx:text-[15px]'>{info}</h6>
        <Link to={path} style={{ color }} className={`border-black sx:text-[13px] inline-block border-[1px] rounded-[50px] px-[16px] py-[7px] font-[700] text-center leading-[1.2] transition-all duration-200 mx-auto ${classify==="light"?"hover:bg-[rgba(30,57,50,0.1)]":"hover:bg-[hsla(0,0%,100%,0.12)] border-white text-white"}`}>
          {link}
        </Link>
      </div>
    </div>
  )
}

export default Info