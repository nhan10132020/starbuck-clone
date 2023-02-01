import React from 'react'

const User = ({hiddenOnMd,info}) => {
  return (
    <div className=''>
        <p className={`font-[700] text-[#006339] opacity-[0.87] mb-[20px] ${hiddenOnMd&&"sm:hidden mb-0"}`}>
            {info}
        </p>
    </div>
  )
}

export default User