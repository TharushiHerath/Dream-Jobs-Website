import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/images/9.jpeg" alt="" className="postImg" />
          <span className="postUserName"> Heleys PLC </span>
          <span className="postTime">5 min ago</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">
            Download Creative social media post feed design. We are hiring
            banner, poster, announcement job for company Stock Vector and
            explore similar vectors at Adobe Stock.
          </div>
          <img src="/images/8.jpg" alt="" className="postCenterImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/images/2.jpg" alt="" className="reaction" />
            <span className="likeCount">100K</span>
          </div>
          <div className="postBottomRight">
            <button className="apply">Apply For This vacancy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
