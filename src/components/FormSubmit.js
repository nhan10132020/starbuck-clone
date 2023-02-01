import React from 'react'

const FormSubmit = ({name,type,isLoading}) => {
  return (
    <button className='relative z-[1] py-[18px] px-[24px] bg-[#00a862] shadow-button-shadow rounded-[500px] text-white text-[19px] font-[700] leading-[1.2] overflow-hidden text-center transition-all duration-200 ease-linear ml-auto cursor-pointer' type={type}
    >
        {name}
    </button>
  )
}

export default FormSubmit