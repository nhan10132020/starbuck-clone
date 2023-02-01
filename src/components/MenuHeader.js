import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuHeader = ({screen,setScreen}) => {

  return (
    <div className="bg-[#f7f7f7] border-[1px] border-[#edebe9] w-full fixed pl-[131px] sm:pl-[50px] pt-[15px] pb-[10px] border-b-[1px] border-b-[#dbd9d7] z-[2] sm:inherit sx:hidden">
      <div className="flex gap-[25px]">
        <Link
          className={`text-[rgba(0,0,0,0.87)] sm:text-[10px] font-[600] text-[13px] pb-[5px] hover:text-[#006339] ${screen === 0 && "border-b-[1px] border-black"}`}
          onClick={() => setScreen(0)}
        >
          All products
        </Link>
        <Link
          to="/menu/featured"
          className={`text-[rgba(0,0,0,0.87)] sm:text-[10px] font-[600] text-[13px] pb-[5px] hover:text-[#006339]`}
        >
          Featured
        </Link>
        <Link className={`text-[rgba(0,0,0,0.87)] sm:text-[10px] font-[600] text-[13px] pb-[5px] hover:text-[#006339]  ${screen === 1 && "border-b-[1px] border-black"}`}
          onClick={() => setScreen(1)}
        >
          Favorite Products
        </Link>
      </div>
    </div>
  );
};

export default MenuHeader;
