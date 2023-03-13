import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navBarBox">
        <div className="navBarLeft">
          <span className="logo">Dream Jobs</span>
        </div>
        <div className="navBarCenter">
          <div className="searchBarBox">
            <SearchIcon className="searchIcon" />
            <input
              placeholder="Search Your Future Job"
              className="searchInput"
            />
          </div>
        </div>
        <div className="navBarRight">
          <div className="navBarLinks">
            <span className="navBarLink">Home Page</span>
            <span className="navBarLink">Profile</span>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcon">
              <NotificationsActiveIcon />
              <span className="icontag">11</span>
            </div>
            <div className="navBarIcon">
              <SettingsIcon className="settingIcon" />
              <span className="icontag">2</span>
            </div>
          </div>
          <div className="pic">
            <img src="/images/1.jpeg" alt="" className="profilePicImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
