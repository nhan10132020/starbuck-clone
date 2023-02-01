import React, { useEffect, useState } from "react";
import { useUserProvider } from "../context/UserProvider";
import MenuItem from "./MenuItem";
import data from "../data/menuListData.json";
import { useAppProvider } from "../context/AppProvider";

const FavouriteScreen = () => {
  const { userInfo } = useUserProvider();
  const { itemFavourite } = useAppProvider();
  const [render,setRender] = useState([])
  useEffect(() => {
    let itemsRender = {};
    data.map((items) => {
      for (var typeofItem in items) {
        itemsRender = {
          ...itemsRender,
          [typeofItem]: [],
        };
        items[typeofItem].map((item) => {
          for (var eachFavItem of itemFavourite) {
            if (
              item.type === eachFavItem.item.type &&
              item.id == eachFavItem.item.id
            ) {
              itemsRender[typeofItem].push(item);
              break;
            }
          }
        });
      }
    });
    setRender(favItemCard(itemsRender))
  }, []);
  
  const favItemCard = (favItem) => {
    const render = [];
    for (var typeOfItem in favItem) {
      if (favItem[typeOfItem].length === 0) {
      } else {
        render.push(
          <div className="mt-[30px] mb-[50px]" key={typeOfItem}>
            <h4 className="text-2xl text-[rgba(0,0,0,0.87)] font-[800] mb-[20px] sx:text-base">
              {typeOfItem.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase()+ typeOfItem.replace(/([A-Z])/g, ' $1').trim().slice(1)}
            </h4>
            <div className="flex flex-wrap gap-y-[100px] gap-x-[20px] mt-[30px]">
              {favItem[typeOfItem].map(({type,image,id},index)=>{
                return (
                    <div key={index}>
                        <MenuItem type={type} image={image} id={id} inFav/>
                    </div>
                )
              })}
            </div>
          </div>
        );
      }
    }
    return render
  };

  return (
    <div className="pl-[100px] mt-[101px]  sm:mt-[30px] sx:pl-[20px]">
      <h1 className="text-3xl text-[rgba(0,0,0,0.87)] font-[800] sx:text-[2xl] pb-[20px] border-b-[1px] border-[rgba(0,0,0,0.1)]">
        <span className="text-[#016239] mr-[10px]">{userInfo.displayName}</span>
        Favourite Products
      </h1>
      <div className="mt-[30px] mb-[50px]">
        {render}
      </div>
    </div>
  );
};

export default FavouriteScreen;
