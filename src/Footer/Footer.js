import React from "react";
import Bitcoin from '../assets/img/Bitcoin.svg'
import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <section className="footer-left">
        <ul>
          <li>
            <a href="/">Linkedin</a>
          </li>
          <li>
            <a href="/">Crunchbase</a>
          </li>
          <li>
            <a href="/">Hackernews</a>
          </li>
        </ul>
      </section>
      <section className="footer-right">
          <img src={Bitcoin} alt='Logo-Bitcion'></img>
      </section>
    </footer>
  );
};
