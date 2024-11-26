import React from "react";
import Logo from "../assets/logo.png"; 
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Logo da Vida Adulta" />
          </a>
        </div>

        <nav className="menu-desktop">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/">Especialidades</a></li>
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Feedback</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
