import React from "react";
import "./Followers.css"

export default function Followers() {

  return (
    <>
      <div id="total_k"></div>
      <div id="posts">
        <div className="twitter">
          <i className="fab fa-twitter"></i>
          <span className="count"></span>Followers
        </div>
        <div className="facebook">
          <i className="fab fa-facebook"></i>
          <span className="count"></span>Likes
        </div>
        <div className="instagram">
          <i className="fab fa-instagram"></i>
          <span className="count"> </span>Followers
        </div>
        <div className="youtube">
          <i className="fab fa-youtube"></i>
          <span className="count"></span>Subscribers
        </div>
        <div className="github">
          <i className="fab fa-github"></i>
          <span className="count"></span>Followers
        </div>
      </div>
    </>
  );
}
