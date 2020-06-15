// these are basically ES6 syntax
import React from "react";
import {MdHome} from "react-icons/md";
import {FaRegCalendarAlt} from "react-icons/fa";
import {GoListOrdered} from "react-icons/go"
import {Link} from "react-router-dom";
// we can also write export const Navigation=function(){ rest all same in middle }
// navigation is a component which we are exporting to other files
export const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <MdHome />
      </Link>
      <Link to="/add">
        <FaRegCalendarAlt />
      </Link>
      <Link to="/list">
        <GoListOrdered />
      </Link>
    </nav>
  );
};
