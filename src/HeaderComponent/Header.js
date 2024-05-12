import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { TbShoppingBag } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";

import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-bar-container">
      <div className="nav-logo-container">
        <div className="start">
          <img
            src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1715423798/Vector_fprcor.png"
            className="nav-logo"
            alt="vector"
          />
        </div>
        <div className="center">
          <h1 className="nav-logo-heading">LOGO</h1>
        </div>
        <div className="end">
          <div className="nav-logos-cart">
            <RiSearch2Line className="icon" />
            <BsHeart className="icon icon-space" />
            <TbShoppingBag className="icon icon-space" />
            <BsPerson className="icon icon-space" />
            <select className="select-cart icon-space">
              <option selected>ENG</option>
              <option>FRE</option>
              <option>GER</option>
            </select>
          </div>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          <h5 className="tab">SHOP</h5>
          <h5 className="tab">SKILLS</h5>
          <h5 className="tab">STORIES</h5>
          <h5 className="tab">ABOUT</h5>
          <h5 className="tab">CONTACT US</h5>
        </div>
      </div>
    </nav>
  );
};

export default Header;
