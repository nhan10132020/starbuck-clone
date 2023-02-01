import React from 'react'
import { Link } from 'react-router-dom'

const Featured = ({
    title,
    info,
    link,
    path,
    image,
    order,
    background,
    color,
    classify,
  }) => {
  return (
  <div className='flex gap-[40px] flex-wrap items-center justify-center py-[30px] px-[70px] mb-[30px] sm:px-[20px] sm:gap-[20px]' style={{ background }}>
    <div className='text-center flex flex-col gap-[20px] max-w-[420px] sm:max-w-[300px] sx:order-2 sx:max-w-[370px]' style={{ order, color }}>
      <h1 className='font-[800] text-[45px] leading-[1.3] tracking-[2px] sm:text-[28px]'>{title}</h1>
      <h4 className='leading-[1.6] text-[20px] tracking-[2px]'>{info}</h4>
      <Link to={path} className={`inline-block bg-[#1e3932] text-white border-[1px] rounded-[50px] py-[7px] px-[16px] font-[600] leading-[1.2] text-center transition-all duration-200 mx-auto ${classify==="light"?"hover:bg-[rgba(30,57,50,0.9)]":"hover:bg-[hsla(0,0%,100%,0.12)]"}`}>
        {link}
      </Link>
    </div>
    <div>
      <img src={image} alt='' className='object-contain w-[600px] md:w-[400px] sm:w-[350px]'/>
    </div>
  </div>
  )
}

export default Featured