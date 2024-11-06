// src/pages/Home.js
import React from 'react';
import cnh from '../assets/25.png';
import alistamento from '../assets/alistamento-militar.jpg';
import alistamento2 from '../assets/alistamento.jpg';
import './Home.css'; 
import ImageSlider from '../components/ImageSlider'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import ThemeSelector from '../components/ThemeSelector';
import VideoPlayer from '../components/VideoPlayer';


const Home = () => {
  const images = [alistamento, alistamento2, cnh];

  return (
    <div>
      <Header /> 
      <main>
        <section className="image-carousel">
          <VideoPlayer /> 
        </section>

        <section className="hero-section">
          <div className="content-wrapper">
            <h1>TRANSFORMANDO IDEIAS EM <span>REALIDADE DIGITAL.</span></h1>
            <p>Bem-vindo ao nosso site, um espaço dedicado a adolescentes que estão a caminho da vida adulta.
            Explore nosso site e descubra tudo o que você precisa saber para se preparar para os desafios da vida adulta.
            </p>
          </div>
        </section>

        <section className="expertise-area">
          <div className="content-wrapper">
            <h2 className="section-title">NOSSAS <span>ESPECIALIDADES.</span></h2>
            <div className="specialty-container">
              <div className="specialty-item">
                <i className="bi bi-code-square"></i>
                <h3>Facilitação</h3>
                <p>Neste site você encontrará informações detalhadas e atualizadas sobre temas essenciais da vida adulta.</p>
              </div>
              <div className="specialty-item">
                <i className="bi bi-cart"></i>
                <h3>Instrução</h3>
                <p>Fornecemos instruções precisas e detalhadas, assegurando que você esteja sempre bem informado.</p>
              </div>
              <div className="specialty-item">
                <i className="bi bi-code-square"></i>
                <h3>Praticidade</h3>
                <p>Priorizamos a praticidade, oferecendo guias passo a passo que simplificam cada etapa.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
