import React, { useState } from 'react';
import './DireitosCivis.css';
import Image from '../../assets/direitoscivis.jpg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const cardsData = [
  {
    title: "Direito à vida",
    description: "Garantia de que ninguém seja privado de sua vida de forma arbitrária.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito à liberdade e à segurança",
    description: "Proteção contra a prisão arbitrária e garantias de julgamento justo.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Liberdade de expressão",
    description: "Direito de manifestar opiniões e ideias sem medo de censura ou represálias.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Liberdade de religião",
    description: "Direito de praticar ou não qualquer religião.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Liberdade de associação e reunião",
    description: "Direito de se associar a grupos e realizar reuniões pacíficas.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito ao voto",
    description: "Participação no processo político por meio de eleições livres e justas.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito à privacidade",
    description: "Proteção contra invasões injustificadas em vida pessoal, familiar e comunicações.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito à igualdade perante a lei",
    description: "Todas as pessoas são iguais, independentemente de raça, gênero, nacionalidade ou outras características.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Proibição da discriminação",
    description: "Proteção contra tratamento desigual por motivos de raça, sexo, religião, origem ou condição social.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito à propriedade",
    description: "Proteção do direito de possuir, usar e dispor de propriedades privadas.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Direito à nacionalidade",
    description: "Garantia de pertencimento a um Estado, com direitos e deveres correspondentes.",
    imageUrl: {Image},
    pageUrl: "/responsabilidades"
  },
  {
    title: "Liberdade de movimento",
    description: "Direito de se deslocar livremente dentro do país e de sair e entrar no país de origem.",
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
    <div className="civis-container">
      <Header />
      <input
        type="text"
        placeholder="Buscar direitos civis..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="civis-search-input"
      />
      <div className="civis-card-container">
        {filteredCards.map((card, index) => (
          <div className="civis-card" key={index} onClick={() => goToPage(card.pageUrl)}>
            <div className="civis-card-image" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
            <div className="civis-card-content">
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
