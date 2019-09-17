import React, { useState } from "react";
import Nav from "./Nav";
import SubNav from "./SubNav";
import { Route } from "react-router-dom";

const NavWrapper = () => {
  const [navItems] = useState([
    {
      name: "MAC",
      link: "/mac"
    },
    { name: "iPad", link: "/ipad" },
    { name: "iPhone", link: "/iphone" },
    { name: "WATCH", link: "/watch" },
    { name: "TV", link: "/tv" },
    { name: "MUSIC", link: "/music" }
  ]);

  return (
    <>
      <nav className="navContainer">
        <ul className="mainNav">
          <Nav navItems={navItems} />
        </ul>
        <Route path="/:item" exact render={props => <SubNav {...props} />} />
      </nav>
    </>
  );
};

export default NavWrapper;
