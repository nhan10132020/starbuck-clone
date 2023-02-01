import React from "react";
import menuList from "../data/menuListData.json"
import MenuList from "../components/MenuList"
import MenuItem from "../components/MenuItem"
const ProductScreen = () => {
  return (
    <div className="pl-[131px] mt-[101px] flex gap-[100px] sm:mt-[30px] sx:pl-[20px]">
      <div className="sm:hidden">
        <MenuList />
      </div>
      <div className="flex-1">
        <h1 className="text-[rgba(0,0,0,0.87)] font-[800] text-3xl mb-[40px] sx:text-2xl">
          Menu
        </h1>
        <div className="mb-[60px]">
          <h2 className="text-2xl text-[rgba(0,0,0,0.87)] font-[800] mb-[20px] sx:text-base">
            Drinks
          </h2>
          <div className="border-t-[1px] border-t-[rgba(0,0,0,0.1)] flex gap-y-[100px] gap-x-[40px] flex-wrap pt-[20px] pr-[20px]">
            {menuList.map((menuListCategory) =>
              menuListCategory.drinks.map(({ type, image, id }, index) => (
                <div key={index}>
                  <MenuItem type={type} image={image} id={id} />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mb-[60px]">
          <h2 className="text-2xl text-[rgba(0,0,0,0.87)] font-[800] mb-[20px] sx:text-base">
            Food
          </h2>
          <div className="border-t-[1px] border-t-[rgba(0,0,0,0.1)] flex gap-y-[100px] gap-x-[40px] flex-wrap pt-[20px] pr-[20px]">
            {menuList.map((menuListCategory) =>
              menuListCategory.food.map(({ type, image, id }, index) => (
                <div key={index}>
                  <MenuItem type={type} image={image} id={id} />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mb-[60px]">
          <h2 className="text-2xl text-[rgba(0,0,0,0.87)] font-[800] mb-[20px] sx:text-base">
            At Home Coffee
          </h2>
          <div className="border-t-[1px] border-t-[rgba(0,0,0,0.1)] flex gap-y-[100px] gap-x-[40px] flex-wrap pt-[20px] pr-[20px]">
            {menuList.map((menuListCategory) =>
              menuListCategory.atHomeCoffee.map(
                ({ type, image, id }, index) => (
                  <div key={index}>
                    <MenuItem type={type} image={image} id={id} />
                  </div>
                )
              )
            )}
          </div>
        </div>

        <div className="mb-[60px]">
          <h2 className="text-2xl text-[rgba(0,0,0,0.87)] font-[800] mb-[20px] sx:text-base">
            Merchandise
          </h2>
          <div className="border-t-[1px] border-t-[rgba(0,0,0,0.1)] flex gap-y-[100px] gap-x-[40px] flex-wrap pt-[20px] pr-[20px]">
            {menuList.map((menuListCategory) =>
              menuListCategory.merchandise.map(({ type, image, id }, index) => (
                <div key={index}>
                  <MenuItem type={type} image={image} id={id} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
