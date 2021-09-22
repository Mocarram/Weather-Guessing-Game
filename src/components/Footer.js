import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <a
        href="https://github.com/Mocarram/Weather-Guessing-Game"
        target="_blank"
        rel="noreferrer"
      >
        <button>Github</button>{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/mocarram-hossain-224980130/"
        target="_blank"
        rel="noreferrer"
      >
        <button>Connect</button>{" "}
      </a>
    </div>
  );
}

export default Footer;
