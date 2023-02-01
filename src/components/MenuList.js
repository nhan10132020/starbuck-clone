import React from 'react'
import menuList from '../data/menuListData.json'
import { Link } from 'react-router-dom'


const MenuList = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <div className='menuList__container'>
        <h4 className='text-[rgba(0,0,0,0.87)] mb-[20px] text-xl font-[600]'>Drinks</h4>
        <div className='flex flex-col gap-[12px]'>
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map((menuListItem,index) => (
              <Link key={index} className="text-[rgba(0,0,0,0.56)] text-[15px] font-[600] hover:text-[#006339] transition-all duration-200 max-w-[150px] leading-[1.5]">{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4 className='text-[rgba(0,0,0,0.87)] mb-[20px] text-xl font-[600]'>Food</h4>
        <div className='flex flex-col gap-[12px]'>
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map((menuListItem,index) => (
              <Link key={index} className="text-[rgba(0,0,0,0.56)] text-[15px] font-[600] hover:text-[#006339] transition-all duration-200 max-w-[150px] leading-[1.5]">{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4 className='text-[rgba(0,0,0,0.87)] mb-[20px] text-xl font-[600]'>At Home Coffee</h4>
        <div className='flex flex-col gap-[12px]'>
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map((menuListItem,index) => (
              <Link key={index} className="text-[rgba(0,0,0,0.56)] text-[15px] font-[600] hover:text-[#006339] transition-all duration-200 max-w-[150px] leading-[1.5]">{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4 className='text-[rgba(0,0,0,0.87)] mb-[20px] text-xl font-[600]'>Merchandise</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map((menuListItem,index) => (
              <Link key={index} className="text-[rgba(0,0,0,0.56)] text-[15px] font-[600] hover:text-[#006339] transition-all duration-200 max-w-[150px] leading-[1.5]">{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuList