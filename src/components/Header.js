import React, { useState } from "react";
import "../styles/Header.css";
import dumble from "../assets/dumble.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const nav = [
    {
      path: "#home",
      display: "Home",
    },
    {
      path: "#schedule",
      display: "Schedule",
    },
    {
      path: "#classes",
      display: "Classes",
    },
    {
      path: "#pricing",
      display: "Pricing",
    },
  ];

  const [open, setopen] = useState(false);

  const click = () => {
    open ? setopen(false) : setopen(true);
  };
  return (
    <header className="header container" id="home">
      <div className="logo">
        <div className="logo_box">
          <img src={dumble} alt="" />
        </div>
        <h3>Gym</h3>
      </div>
      <nav>
        <ul className={open ? "open" : "Close"}>
          <FontAwesomeIcon icon={faXmark} className="close" onClick={click} />
          {nav.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.display}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="register_btn btn">Register</button>
      <FontAwesomeIcon icon={faBars} className="menu" onClick={click} />
    </header>
  );
}

export default Header;
