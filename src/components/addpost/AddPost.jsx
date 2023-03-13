import React from "react";
import "./addpost.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function () {
  return (
    <div className="addpost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/1.jpeg" alt="" className="addPostPic" />
          <input placeholder="Add New Vacancies :)" className="addPostInput" />
        </div>
        <hr className="postHr" />
        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <AddAPhotoIcon htmlColor="purple" className="addPhoto" />
              <span className="addPostOptionText">Add Photos or video</span>
            </div>
            <div className="addPostOption">
              <AddLocationIcon htmlColor="purple" className="addPhoto" />
              <span className="addPostOptionText">Add location</span>
            </div>
            <div className="addPostOption">
              <LocalOfferIcon htmlColor="purple" className="addPhoto" />
              <span className="addPostOptionText">Add Tag</span>
            </div>
          </div>
          <button className="postButton">Post</button>
        </div>
      </div>
    </div>
  );
}
