import React from "react";
import Avatar from "../components/shared/avatar";
import leftarrow from "../assets/icons/arrow-left.png";
import avatarImg from "../assets/icons/avatar.png";
import CompatibilityResult from "../components/compatibilityResult";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Compatibility = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="icon">
          <span>
            <Link to='/'> <img src={leftarrow} /></Link>
          </span>
        </div>
        <p>Compatibility Check</p>
        <Avatar src={avatarImg} alt="avatar" />
      </div>
      <div className="page-heading">
        <span className="subtitle-tab">Subtitle</span>
        <p>Page Heading</p>
      </div>
      <CompatibilityResult />
      {/* <Navbar /> */}
    </div>
  );
};

export default Compatibility;
