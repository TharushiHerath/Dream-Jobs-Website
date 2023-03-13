import React from "react";
import "./leftpane.css";
import ChatIcon from "@mui/icons-material/Chat";
import StoreIcon from "@mui/icons-material/Store";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GradeIcon from "@mui/icons-material/Grade";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";

export default function leftPane() {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
            <StoreIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Company</span>
          </li>
          <li className="leftPaneMenuItem">
            <ChatIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className="leftPaneMenuItem">
            <CalendarMonthIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Calender</span>
          </li>
          <li className="leftPaneMenuItem">
            <NewspaperIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">News</span>
          </li>
          <li className="leftPaneMenuItem">
            <GradeIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Rating</span>
          </li>
          <li className="leftPaneMenuItem">
            <SettingsIcon className="leftPaneMenuIcon" />
            <span className="leftPaneMenuText">Setting</span>
          </li>
          <hr />
          <br />
          <div className="companyYouApply">
            <h3>Pages You Applied</h3>
          </div>
          <br />
          <div className="companyList">
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">ACDE Company</span>
            </li>
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">Virtusa </span>
            </li>
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">DHELP (PLC)</span>
            </li>
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">Tiara Cake Company</span>
            </li>
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">TY Engineering Company</span>
            </li>
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">Express Java</span>
            </li>
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">IFS Company</span>
            </li>
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">Securiteam</span>
            </li>
            <li className="companyListItem">
              <img src="/images/5.png" alt="" className="companyPic" />
              <span className="companyName">Groupon company</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
