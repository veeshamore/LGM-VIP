import React from "react";
import "./Header.css";
import { user } from "./Cards";

const Header = () => {
  return (
    <>
      <div className="head">
        <h1>ZIPPY </h1>
        <button className="btn" onClick={user}>
          Get Users
        </button>
      </div>
    </>
  );
};

export default Header;
