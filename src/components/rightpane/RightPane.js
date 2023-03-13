import React from "react";
import "./rightpane.css";

export default function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponserd">Sponserd</span>
          <img src="/images/7.png" alt="" className="adImg" />
        </div>
        <div className="onlineList">
          <h3>Online Company List</h3>
          <div className="onlineCompany">
            <div className="onlineCompanyImg">
              <img src="/images/6.png" alt="" className="onlineImg" />
              <span className="status"></span>
            </div>
            <span className="CompanyName">AEDR companay</span>
          </div>
          <div className="onlineCompany">
            <div className="onlineCompanyImg">
              <img src="/images/6.png" alt="" className="onlineImg" />
              <span className="status"></span>
            </div>
            <span className="CompanyName">IMF IT companay</span>
          </div>
          <div className="onlineCompany">
            <div className="onlineCompanyImg">
              <img src="/images/6.png" alt="" className="onlineImg" />
              <span className="status"></span>
            </div>
            <span className="CompanyName">Aurora Branch</span>
          </div>
          <div className="onlineCompany">
            <div className="onlineCompanyImg">
              <img src="/images/6.png" alt="" className="onlineImg" />
              <span className="status"></span>
            </div>
            <span className="CompanyName">MAS Holding</span>
          </div>
          <div className="onlineCompany">
            <div className="onlineCompanyImg">
              <img src="/images/6.png" alt="" className="onlineImg" />
              <span className="status"></span>
            </div>
            <span className="CompanyName">Nelson Food companay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
