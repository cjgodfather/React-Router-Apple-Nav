import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <>
      {props.navItems.map((item, idx) => (
        <li className="navList" key={idx}>
          <NavLink to={`${item.link}`}>{item.name}</NavLink>
        </li>
      ))}
    </>
  );
};

export default Nav;
