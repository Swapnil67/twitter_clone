import React from "react";
import { Link } from "react-router-dom";
import TwitterLogo from "../styles/assets/twitter-logo.png"
import "../styles/landing.css"

const Landing = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="left">
          <div className="items-wrapper">
            <div className="item">
              <span className="icon">
                <i className="fa fa-search"></i>
              </span>
              <span className="label">Follow your interests </span>
            </div>
            <div className="item">
              <span className="icon">
                <i className="fa fa-user"></i>
              </span>
              <span className="label">
                Here what people are talking about.{" "}
              </span>
            </div>
            <div className="item">
              <span className="icon">
                <i className="fa fa-comment"></i>
              </span>
              <span className="label">Join the conversation </span>
            </div>
          </div>
        </div>
        <div className="center">
          <img src={TwitterLogo} alt="logo" style={{ width: "50px" }} />
          <h1>
            See What's happening in
            <br />
            the world right now
          </h1>
          <span>Join Twitter Today</span>
          <Link to="/register" className="btn-sign-up" >Sign Up</Link>
          <Link to="/login" className="btn-login" >Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
