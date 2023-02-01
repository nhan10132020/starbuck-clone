import React, { useState } from "react";
import Header from "../components/Header";
import MenuHeader from "../components/MenuHeader";
import ProductScreen from "../components/ProductScreen";
import FavouriteScreen from "../components/FavouriteScreen";

const MenuScreen = () => {
  const [screen,setScreen] = useState(0)
  return (
    <div className="">
      <Header menuPage />
      <div className="flex flex-col pt-[101px] sm:pt-0 sx:mt-[30px]">
        <MenuHeader screen={screen} setScreen={setScreen}/>
        {screen===0&&<ProductScreen />}
        {screen===1&&<FavouriteScreen/>}
      </div>
    </div>
  );
};

export default MenuScreen;
