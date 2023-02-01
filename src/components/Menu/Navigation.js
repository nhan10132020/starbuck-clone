import * as React from "react";
import { motion } from "framer-motion";
import MenuLink from "./MenuLink";
import FindStore from "../FindStore";
import { useUserProvider } from "../../context/UserProvider";
import SignupButton from "../SignupButton";
import SigninButton from "../SigninButton";
import LogoutButton from "../LogoutButton";
import User from "../User";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants2 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  

export const Navigation = ({toggle}) => {
    const [showMenuCategories,setShowMenuCategories] = React.useState(false)
    const {user,userInfo} = useUserProvider()
    return (
        <>
        {
        showMenuCategories?
        (<motion.ul variants={variants}>
            <MenuLink link="Menu" gobackIcon onClick={()=>{
                setShowMenuCategories(false);
            }} width="60%"/>
            <MenuLink link="All products" path="/menu"  onClick={()=>{
                setShowMenuCategories(false);
                toggle();
            }}/>
            <MenuLink link="Featured" path="/menu/featured" onClick={()=>{
                setShowMenuCategories(false);
                toggle();
            }}/>
            <MenuLink link="Previous Orders"  onClick={()=>{
                setShowMenuCategories(false);
            }} width="60%"/>
            <MenuLink link="Favorite Products"  onClick={()=>{
                setShowMenuCategories(false);
            }} width="60%"/>
        </motion.ul>
        ):(
        <motion.ul variants={variants}>
            <MenuLink link="Menu" icon onClick={()=>{setShowMenuCategories(true)}}/>
            <MenuLink link="Rewards"/>
            <MenuLink link="Gift Cards"/>
            <motion.hr variants={variants2}/>
            <motion.div variants={variants2}>
                {user&&<User info={userInfo.displayName}/>}
            </motion.div>
            <motion.div className='navigation__buttons' variants={variants2}>
                {!user?(
                <>
                <SigninButton/>
                <SignupButton/>
                </>):(
                <LogoutButton/>
                )}
            </motion.div>
            <motion.div variants={variants2}>
                <FindStore/>
            </motion.div>
        </motion.ul>
        )
        }
        </>
    )
}
