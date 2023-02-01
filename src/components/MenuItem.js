import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Tooltip, Snackbar, Alert } from "@mui/material";
import { MdFavorite, MdOutlineShoppingCart } from "react-icons/md";
import {
  addDoc,
  deleteDoc,
  collection,
  query,
  getDocs,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useUserProvider } from "../context/UserProvider";
import { useAppProvider } from "../context/AppProvider";

const MenuItem = ({ type, image, id,inFav }) => {
  const [openSnackBar, setOpenSackBar] = useState(false);
  const { userInfo } = useUserProvider();
  const { setItemFavourite, itemFavourite } = useAppProvider();
  const [isItemFav, setIsItemFav] = useState(false);

  useEffect(()=>{
      let bool = false;
      itemFavourite.forEach((item)=>{
        if(item.item.type===type && item.item.id ==id){
          bool=true;
        }
      })
      setIsItemFav(bool)
  },[itemFavourite])

  const handleFav = async () => {
    setIsItemFav(!isItemFav);
    if (!isItemFav) {
      await addDoc(collection(db, "favourites"), {
        userUid: userInfo.uid,
        item: {
          type: type,
          id: id,
        },
      });
      setItemFavourite([...itemFavourite,{
        userUid: userInfo.uid,
        item: {
          type: type,
          id: id,
        },
      }])
    } else {
      const q = query(
        collection(db, "favourites"),
        where("userUid", "==", userInfo.uid),
        where("item.id", "==", id),
        where("item.type", "==", type)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((snap) => {
        deleteDoc(doc(db, "favourites", snap.id));
        let allElements = itemFavourite;
        allElements.splice(
          itemFavourite.indexOf(snap.data()),
          1
        );
        setItemFavourite(allElements)
      });
    }
  };

  return (
    <Fade>
      <Link className="flex gap-[10px] w-[260px] sm:w-[240px] ">
        <img
          src={image}
          alt=""
          className="rounded-[50%] w-[120px] sm:w-[80px]"
        />
        <div className={`flex flex-col gap-[10px] ${inFav&&"justify-center"}`}>
          <h4 className=" text-[rgba(0,0,0,0.87)] font-[600] text-xl leading-[1.5] sm:text-base">
            {type}
          </h4>
          <div className="flex gap-[20px]">
            {!inFav&&<Tooltip title="Favourite" arrow disableInteractive>
              <div onClick={handleFav}>
                <MdFavorite
                  size="22px"
                  className={`hover:text-[#DB120C] transition-all ${
                    isItemFav && "text-[#DB120C]"
                  }`}
                />
              </div>
            </Tooltip>}
            <Tooltip title="Add to card" arrow disableInteractive>
              <div onClick={() => setOpenSackBar(true)}>
                <MdOutlineShoppingCart
                  size="22px"
                  className="hover:text-[#347754] "
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </Link>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={1000}
        onClose={() => setOpenSackBar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        key={"bottom right"}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Done!
        </Alert>
      </Snackbar>
    </Fade>
  );
};

export default MenuItem;
