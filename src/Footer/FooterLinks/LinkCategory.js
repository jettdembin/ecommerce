import React, { useState } from "react";
import "./LinkCategory.css";

import { motion } from "framer-motion"

import * as mui from "../../mui/index";

import { useMediaQuery } from "react-responsive";

function LinkCategory(props) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  const list = {
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }, 
    },
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const [isExpanded, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!isExpanded);
  };

  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return (
    <div className="LinkCategory">
      {checkIfMediumPlus ? 
      <div className="LinkCategory-header-cntr">
        <div className="LinkCategory-header-wrapper">
          <h1 className="LinkCategory-header">{props.linkCategory}</h1>
        </div>
        <div className="LinkCategory-link-cntr-wrapper">
          <ul className="LinkCategory-link-cntr">
          {props.links.map((link,i) => (
            <>
              <li className="LinkCategory-link" key={i}>{link}</li>
            </>
          ))}
          </ul>
        </div>
      </div>
      :
      <div className="LinkCategory-header-cntr">
        <div className="LinkCategory-header-wrapper">
              <h1 className="LinkCategory-header">{props.linkCategory}</h1>
              {isExpanded ? 
              <mui.RemoveIcon
                className="LinkCategory-icon"
                onClick={(e)=> {
                  e.stopPropagation();
                  toggleMenu()
                  toggleVisibility()
                }}
              /> :
              <mui.Add
                className="LinkCategory-icon"
                onClick={(e)=> {
                  e.stopPropagation();
                  toggleMenu()
                  toggleVisibility()
                }}
              />
              }
            </div>
              <motion.ul 
                initial="hidden"
                animate={ isVisible ? 'visible' : 'hidden'}
                variants={list} 
                className="LinkCategory-link-cntr">
                {props.links.map((link,i) => (
                  <>
                    <motion.li className="LinkCategory-link" variants={item} key={i} >{link}</motion.li>
                  </>
                ))}
              </motion.ul>
      </div>
      }
    </div>
  );
}

export default LinkCategory;
