import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuLink = ({ link, path, icon, gobackIcon, onClick, width }) => {
  return (
    <>
      <Link to={path}>
        <motion.li
          style={{width}}
          onClick={onClick}
          variants={variants}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
        >
          {gobackIcon&& <IoIosArrowBack size="22px"/>}
          {link}
          {icon&& <IoIosArrowForward size="22px"/>}
        </motion.li>
      </Link>
    </>
  );
};

export default MenuLink;
