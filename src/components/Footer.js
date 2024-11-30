import React from "react";
import "../styles/Footer.css";
import dumble from "../assets/dumble.png";

function Footer() {
  const about = [
    { path: "#", display: "Our Company" },
    { path: "#", display: "Our Plan" },
    { path: "#", display: "Become Member" },
  ];
  const links = [
    { path: "#", display: "About Us" },
    { path: "#", display: "Contact Us" },
    { path: "#", display: "Support" },
  ];

  const quick = [
    { path: "#", display: "Teams" },
    { path: "#", display: "Guide" },
    { path: "#", display: "Privacy & Policy" },
  ];

  return (
    <div className="footer_section">
      <div className="flex container">
        <div className="log">
          <div className="logo1">
            <div>
              <img src={dumble} alt="" />
            </div>
            <h2>Gym</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem minus
            et sapiente veniam iste doloribus?
          </p>
        </div>
        <div className="about">
          <h3>Company</h3>
          <ul className="ul">
            {about.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="links">{item.display}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="about">
          <h3>Quick Links</h3>
          <ul className="ul">
            {links.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="links">{item.display}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="about">
          <h3>Usage</h3>
          <ul className="ul">
            {quick.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="links">{item.display}</a>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>
  );
}

export default Footer;
