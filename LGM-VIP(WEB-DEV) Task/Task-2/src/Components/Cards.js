import React from "react";
import "./Cards.css";
import Api from "./Api";
import Header from "./Header";

const user = () => {
  return (document.getElementById("content").style.display = "block");
};

const Cards = () => {
  return (
    <>
      <Header />
      <div className="whole">
        <div id="content">
          <div className="style">
            <Api />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
export { user };
