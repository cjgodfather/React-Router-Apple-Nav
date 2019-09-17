import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SubNav = props => {
  const [subNavItems] = useState([
    {
      id: "mac",
      subItems: [
        { name: "MacBook Air", link: "/macbook-air" },
        { name: "MacBook Pro", link: "/macbook-pro" },
        { name: "iMac", link: "/imac" },
        { name: "iMac Pro", link: "/imacpro" },
        { name: "Mac Pro", link: "/macpro" }
      ]
    },
    {
      id: "iphone",
      subItems: [
        { name: "iPhone 11 Pro", link: "/iphone-11-pro" },
        { name: "iphone 11", link: "/iphone-11" },
        { name: "iphone Xr", link: "/iphone-xr" },
        { name: "iphone 8", link: "/iphone-8" }
      ]
    },
    {
      id: "watch",
      subItems: [
        { name: "Apple Watch Series 5", link: "/watch-series-5" },
        { name: "Apple Watch Nike", link: "/watch-nike" },
        { name: "Apple Watch Hermes", link: "/watch-hermes" },
        { name: "Apple Watch Edition", link: "/watch-edition" }
      ]
    },
    {
      id: "ipad",
      subItems: [
        { name: "iPad Pro", link: "/ipad-pro" },
        { name: "iPad Air", link: "/ipad-air" },
        { name: "iPad", link: "/ipad" },
        { name: "iPad mini", link: "/ipad-mini" }
      ]
    },
    {
      id: "tv",
      subItems: [
        { name: "Apple TV app", link: "/tv-app" },
        { name: "Apple TV+", link: "/tv+" },
        { name: "Apple TV 4K", link: "/tv-4k" },
        { name: "Apple Watch HD", link: "/tv-hd" }
      ]
    },
    {
      id: "music",
      subItems: [
        { name: "Apple Music", link: "/apple-music" },
        { name: "HomePod", link: "homepod" },
        { name: "AirPods", link: "/airpods" },
        { name: "iPod touch", link: "/ipod-touch" }
      ]
    }
  ]);

  const item = subNavItems.find(el => el.id === props.match.params.item);
  console.log(props);
  return (
    <ul className="subNav">
      {item
        ? item.subItems.map((item, idx) => (
            <li key={idx}>
              <NavLink to={`${item.link}`}>{item.name}</NavLink>
            </li>
          ))
        : null}
    </ul>
  );
};

export default SubNav;
