import React, { useState } from 'react';
import './DireitosHumanos.css';
import Image from '../assets/direitoshumanos.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import VotingSystem from '../components/VotingSystem';

  const cardsData = [
    {
      title: "Educação",
      description: "Direito de acesso à educação básica, fundamental e de qualidade para todos.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Saúde",
      description: "Direito ao atendimento pelo Sistema Único de Saúde (SUS), que deve ser universal, gratuito e de qualidade.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Alimentação",
      description: "Garantia de acesso à alimentação adequada para todos os cidadãos.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Trabalho",
      description: "Direito ao trabalho digno, com salário justo e proteção social.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Moradia",
      description: "Direito à habitação digna, incluindo políticas de acesso à moradia para as populações vulneráveis.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Transporte",
      description: "Garantia de acesso a sistemas de transporte público acessíveis e de qualidade.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Lazer",
      description: "Direito ao acesso a atividades recreativas e culturais.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Segurança",
      description: "Direito à proteção e segurança pública, incluindo a atuação das forças de segurança.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Previdência Social",
      description: "Proteção do trabalhador em casos de incapacidade, aposentadoria e outros benefícios sociais.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Proteção à maternidade e à infância",
      description: "Garantias especiais para mães, gestantes e crianças, como licença maternidade e creches.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    },
    {
      title: "Assistência aos desamparados",
      description: "Proteção social para aqueles em situação de vulnerabilidade, como idosos, deficientes e pessoas sem meios de sustento.",
      imageUrl: {Image},
      pageUrl: "/responsabilidades"
    }
  ];
  
const Especialidades = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToPage = (pageUrl) => {
    window.location.href = pageUrl;
  };

  return (
    <div className="direitos-humanos-container">
      <Header />
      <input
        type="text"
        placeholder="Buscar Direitos Humanos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="direitos-humanos-search-input"
      />
      <div className="direitos-humanos-card-container">
        {filteredCards.map((card, index) => (
          <div className="direitos-humanos-card" key={index} onClick={() => goToPage(card.pageUrl)}>
            <div className="direitos-humanos-card-image" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
            <div className="direitos-humanos-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Especialidades;
