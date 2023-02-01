import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import { Link } from 'react-router-dom'
const FindStore = ({hiddenOnMd}) => {
  return (
    <Link className={`flex items-center gap-[5px] text-black opacity-[0.87] mr-[20px] hover:text-[#008248] transition-all duration-100 ${hiddenOnMd?"sm:hidden":""}`}>
      <MdLocationOn size="22px"/>
      <h5>Find a store</h5>
    </Link>
  )
}

export default FindStore