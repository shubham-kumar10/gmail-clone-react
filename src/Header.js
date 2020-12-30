import React, { Component } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import logo_big from "./assets/images/logo_big.png";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header--left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img src={logo_big} alt="Gmail Logo" />
        </div>
        <div className="header--center">
          <SearchIcon />
          <input type="text" placeholder="Search Mail..." />
          <ArrowDropDownIcon className="header--center-input" />
        </div>
        <div className="header--right">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar />
        </div>
      </div>
    );
  }
}

export default Header;
