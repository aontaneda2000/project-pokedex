import React from "react";
import "./styles/header.css";
import logo from "./img/logo.jpg";

const HeaderPoke = () => {
  return (
    <header className="header">
      <div className="header__rec-red">
        <img className="header__img" src={logo} alt="" />
      </div>
      <div className="header__rec-black"></div>
    </header>
  );
};

export default HeaderPoke;
