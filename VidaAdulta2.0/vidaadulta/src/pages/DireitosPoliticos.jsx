import React, { useState } from 'react';
import './DireitosPoliticos.css';
import Image from '../assets/direitospoliticos.jpeg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import VotingSystem from '../components/VotingSystem';

const cardsData = [
  {
    title: "Direito ao voto",
    description: "Permite que o cidadão participe das eleições e processos de consulta popular.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito de ser votado",
    description: "Garantia de que o cidadão possa se candidatar a cargos públicos.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Elegibilidade",
    description: "Estabelece os requisitos que o cidadão deve cumprir para concorrer a cargos eletivos.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito de se associar a partidos políticos",
    description: "Faculta ao cidadão a filiação e participação em atividades partidárias.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito de participar de plebiscitos e referendos",
    description: "Permite a participação direta do cidadão em decisões de interesse público.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito de impugnar candidaturas",
    description: "Faculta ao cidadão contestar a legalidade de candidaturas que não atendam aos requisitos legais.",
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
    <div className="politicos-container">
      <Header />
      <input
        type="text"
        placeholder="Buscar direitos políticos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="politicos-search-input"
      />
      <div className="politicos-card-container">
        {filteredCards.map((card, index) => (
          <div className="politicos-card" key={index} onClick={() => goToPage(card.pageUrl)}>
            <div className="politicos-card-image" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
            <div className="politicos-card-content">
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