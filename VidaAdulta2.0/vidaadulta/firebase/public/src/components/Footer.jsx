// src/components/Footer.js
import React from "react";
import Logo from "../assets/logo.png"; // Ajuste o caminho da logo conforme necessário
import './Footer.css'; // Importa o CSS para o Footer

const Footer = () => {
  return (
    <footer>
      <div className="interface2">
        <div className="flex">
          <div className="logo-footer">
            <img src={Logo} alt="Logo" className="footer-logo" />
          </div>
          <div className="btn-social">
            <a href="https://www.instagram.com/vidaadulta01/" target="_blank" rel="noopener noreferrer">
              <button className="social-button">
                <i className="bi bi-instagram"></i>
              </button>
            </a>
            <a href="https://www.youtube.com/channel/UCEW7ikRW6oyugAtEj2uSioA" target="_blank" rel="noopener noreferrer">
              <button className="social-button">
                <i className="bi bi-youtube"></i>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/vida-adulta-0b1653324/" target="_blank" rel="noopener noreferrer">
              <button className="social-button">
                <i className="bi bi-linkedin"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
